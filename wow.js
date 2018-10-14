function WriteToFile(passForm) {
 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("codesalvageo.github.io/tspeedylife1.github.io/filename.txt", True);
 
    var username = document.getElementById('such');
    var message  = document.getElementById('luch');
 
    s.writeline("Username :" + username);
    s.writeline("Message :" + message);
 
    s.writeline("-----------------------------");
    s.Close();
 }

                 
