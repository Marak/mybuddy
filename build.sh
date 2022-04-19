# mac os
# ensures that test ssl certs are included
nexe bin/server.js -r "sslcert/*.pem" 

# windows 
# target windows 10 latest build x64 ( can add more windows later )
nexe -t windows-x64-10.16.0 bin/server.js -r "sslcert/*.pem" 