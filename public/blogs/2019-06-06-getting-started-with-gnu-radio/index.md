# Getting Started With GNU Radio

This post covers the Ubuntu installation process and the beginner usage of GNU
Radio using GNU Radio Companion for the construction of basic signal flowgraphs.

## Section 1: GNU Radio

As stated on
[the official GNU Radio website](https://wiki.gnuradio.org/index.php/What_is_GNU_Radio%3F):
GNU Radio is a free & open-source software development toolkit that provides
signal processing blocks to implement software radios. Basically GNU Radio
provides a set of signal processing blocks similar to what MATLAB provides, but
without the need for licensing. Additionally, GNU Radio allows the source and
destination of signal processing flowgraphs to be software-defined radio
hardware such as the [RTL-SDR](https://www.rtl-sdr.com/),
[HackRF one](https://greatscottgadgets.com/hackrf/one/), and
[LimeSDR](https://www.crowdsupply.com/lime-micro/limesdr).

If you're a programmer, check out my intro to
[writing GNU Radio Blocks](http://joshuaedgcombe.com/creating-your-first-gnu-radio-block/).
This method provides more control over the flowgraph and

GNU Radio also has a drag and drop GUI flowgraph creation tool that acts as a
Simulink equivalent called GNU Radio Companion. GNU Radio Companion provides an
easy method of getting started with the GNU Radio blocks and to perform some
basic signal analysis quickly and easily. If you're just getting started with
SDR, but want to see a bigger project check out my
[GNU Radio FSK Tutorial](http://joshuaedgcombe.com/gnu-radio-bfsk/).

### GNU Radio Companion

GNU Radio Companion provides a graphical user interface for all of the
functionality of GNU Radio. The graphical user interface that GNU Radio
Companion provides allows for an easy introduction to the components
provided by GNU Radio. It also provides a quick method for prototyping signal
flowgraphs.

## Section 2: Ubuntu Installation
Ensure that the computer you are currently working on has an internet
connection.

1. Open a terminal by pressing `ctrl+alt+t`
1. Update the package manager local understanding of the repository list by
running:

   ```code
   sudo apt-get update
   ```

   in the open terminal.

1. Install GNU radio and OSMOsdr. Run:

   ```code
   sudo apt-get install gnuradio-dev gr-osmosdr
   ```

   in the open terminal. Type **Y** and press enter when prompted.

   [OSMOsdr](https://osmocom.org/) provides a block in GNU Radio Companion that
   provides an interface to the SDR hardware connected to the computer running
   GNU Radio.

1. Start GNU Radio Companion. From the command line, run:

   gnuradio-companion

   **-or-**

   Press the windows key and type GNU into the search bar and you should see
   the GNU Radio Companion.

1. Right click on the GNU Radio companion icon on the left icon sidebar and
lock the GNU Radio Companion icon in the icon bar for ease of access.

## Section 3: Basic Message Encoding And Decoding

A **vector source** block can be used to supply the message bytes for the
system when prototyping. For larger messages a **file source** block could be
used and for more complex or dynamic messages the flowgraph should be pulled
together in python or C++. A basic closed loop system with messaging can be
found in Figure 3.1 below.

![](/assets/kitten.jpg)
**Figure 3.1**: Basic Tagged Stream and PDU Flowgraph

The **vector source** supplies the message bytes to be modulated and
transmitted across the channel medium. The stream of message bytes is passed
through the **stream to tagged stream** block to add a tag with the key
"packet_len" and value "21" to the message bytes. A tagged stream is necessary
for message packetization. In addition to being necessary for message
packetization, the tagged stream is also necessary for conversion of the
message to a PDU. The PDU is then published using the host and port specified
in the **Socket PDU** block.  After starting the flowgraph, running the
command:

`nc 127.0.0.1 52001`

in a command prompt will display the received messages. The **throttle** block
in Figure 3.1 can be replaced with the modulation and channel medium.

A further improvement to the flow graph in Figure 3.1 is the addition of a
packet header that provides the receiver a method of detecting the start of a
new packet. The packet header is generated by running the tagged stream through
the **Protocol Formatter** block. The packet header is then prepended to the
message stream using the **Tagged Stream Mux** block.

The message stream is composed of 8 bit bytes at the output of the
**Tagged Stream Mux** block, but often the number of bits per symbol is less
than 8 and the bytes need to be separated into symbols with the appropriate
number of bits. The repacking of 8 bit bytes into the appropriate number of
bits per symbol is performed by the **Repack Bits** block. The output of the
Repack Bits block is the stream of data that should be modulated and
transmitted across the channel.

For the transmitter flowgraph, the value of the field Format Obj. of the
Protocol Formatter needs to be set to:

    digital.header_format_default(digital.packet_utils.default_access_code, 0)

This field defines the access code that is prepended to the message byte
stream. The documentation for the function can be found
[here](https://www.gnuradio.org/doc/doxygen/classgr_1_1digital_1_1header__format__default.html#af3973a7899b82cd59dde82c0fae9351e).

![](/assets/kitten.jpg)
**Figure 3.2**: Source With Packet Formatting Flowgraph

In order to receive the signal from the flowgraph in Figure 3.2, a flowgraph
needs to be created at the receiver that can recognize the packet header when
it is received. The **Correlate Access Code - Tag Stream** block accepts the
bits received at the receiver and checks for the header prepended to the
message stream using in the flowgraph in Figure 3.2. When the message header is
detected in the **Correlate Access Code - Tag Stream** block, the message
stream of bits is then output from the block as a tagged stream of bits. The
bits then need to be repacked into bytes, which is done using the
**Repack Bits** block. The bytes are then converted to PDU's using the
**Tagged Stream to PDU** block and output on the host and port specified in the
**Socket PDU** block. The receiver flowgraph can be seen in Figure 3.3.

The value for the access code field needs to be set to:

    digital.packet_utils.default_access_code

This value needs to match with the value defined in the Format Obj. field of
the **Protocol Formatter** block in the transmitter flowgraph.

![](/assets/kitten.jpg)
**Figure 3.3**: Destination with Packet Detection Flowgraph

The full transmitter and receiver closed system can be seen in Figure 3.4
below. The **Tag Gate** and **Throttle** blocks can be replaced with the
modulation/demodulation and channel of the communication system for actual
implementation.

![](/assets/kitten.jpg)
**Figure 3.4**: Basic Tagged Stream and PDU Flowgraph with Message Encoding

This is a basic closed-loop version of message encoding, packetization, and
detection. This flowgraph can be used as a template for further flowgraphs with
the **Tag Gate** and **Throttle** blocks replaced by your desired modulation
and demodulation flowgraphs to create a closed-loop version of your modulation
scheme. The transmitter and receiver flowgraphs can then be separated and the
**osmocom Source** and **osmocom Sink** blocks can be used to test your
flowgraphs across your channel medium of choice.


Hope you enjoyed this article and I always enjoy feedback! See you in the
comments!

