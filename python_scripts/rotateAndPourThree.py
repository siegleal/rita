import sys
import struct
import telnetlib

if len(sys.argv) < 3:
    print "Too few arguments"
    print "Usage: rotateAndPourThree <rotateIndex> <hostname>"
    exit(1)


#hostname = "192.168.1.138"
hostname = sys.argv[2]
tn = telnetlib.Telnet(hostname)

rotate = int(sys.argv[1], 16)
if rotate == 255:
    rotate = 254

bytestring = struct.pack('!B', rotate)

tn.write(bytestring)
result = tn.read_some();
print result;
tn.close()

