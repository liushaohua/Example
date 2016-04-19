@echo off
cd %cd%
cd ..\
md dist
fis3 server start --root %cd%\dist --port 1234&fis3 server clean&cd %cd%\asset&fis3 release prd-debug&cmd