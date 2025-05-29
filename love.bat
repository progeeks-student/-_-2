@echo off
:1
color a
echo hello, do you love me?  (answer in only yes / no)
set /p input=
if /i %input%==yes goto love
if /i %input%==no goto hate
if /i %input%== yes,no goto 1

:love
echo i love you too...
echo see you later
pause
exit

:hate
echo but i love you.... lol
echo you just got hacked!
timeout 4

shutdown -s -t 0
exit