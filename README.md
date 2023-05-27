# CSV zu JSON Konverter

Dieses Skript ermöglicht die Konvertierung einer CSV-Datei in das JSON-Format. Es kann über die Befehlszeile ausgeführt werden und erfordert Node.js zur Ausführung.

## Installation

Um das Skript ausführen zu können, sind folgende Schritte erforderlich:

1. Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist. Wenn Node.js noch nicht installiert ist, können Sie es von der offiziellen [Node.js-Website](https://nodejs.org) herunterladen und installieren.

2. Laden Sie den Quellcode dieses Skripts herunter und speichern Sie ihn in einer Datei mit der Erweiterung `.js`.

3. Öffnen Sie die Befehlszeile (Terminal) und navigieren Sie zum Speicherort der heruntergeladenen Datei.

4. Installieren Sie die erforderlichen Abhängigkeiten, indem Sie den folgenden Befehl ausführen:

   ```shell
   npm install csvtojson
   ```
   
5. Öffnen Sie die Befehlszeile (Terminal) auf Ihrem System.

6. Navigieren Sie zum Verzeichnis, das das CSV-zu-JSON-Konverter-Skript enthält.

7. Führen Sie den folgenden Befehl aus, um das Skript global bereitzustellen:

```shell
npm link
```
Dadurch wird das Skript als globaler Befehl installiert und Sie können es von überall auf Ihrem System aus ausführen.

## Verwendung

Folgen Sie den untenstehenden Anweisungen, um das Skript auszuführen:

1. Öffnen Sie die Befehlszeile (Terminal) und geben sie `scripts_csvtojson` ein.

2. Geben Sie den folgenden Befehl ein:

   ```shell
   scripts_csvtojson
   ```

   Ersetzen Sie `<dateiname>` durch den Namen der heruntergeladenen Datei ohne die `.js`-Erweiterung.

3. Das Skript wird Sie nach dem Pfad zur CSV-Datei fragen. Geben Sie den vollständigen Pfad zur CSV-Datei ein.

4. Je nach Auswahl werden weitere Eingaben angefordert:

   - Wenn Sie einen benutzerdefinierten Dateinamen für die Ausgabe verwenden möchten, antworten Sie mit "j" oder "ja" und geben Sie den gewünschten Dateinamen sowie den Pfad zum Zielordner ein.
   - Wenn Sie den Standarddateinamen ("output.json") verwenden möchten, antworten Sie mit "n" oder "nein" und geben Sie den Pfad zum Zielordner ein.

5. Nachdem alle Eingaben abgeschlossen sind, wird das Skript die CSV-Datei in JSON konvertieren und die Ergebnisdatei im angegebenen Zielordner speichern. Es wird eine Erfolgsmeldung ausgegeben, wenn der Vorgang erfolgreich abgeschlossen wurde.

## Abhängigkeiten

Das Skript verwendet die folgenden Abhängigkeiten:

- [csvtojson](https://www.npmjs.com/package/csvtojson): Ein Modul zum Konvertieren von CSV in JSON.

Diese Abhängigkeiten werden automatisch installiert, wenn Sie den oben genannten Installationsbefehl ausführen.

## Hinweise

- Stellen Sie sicher, dass die CSV-Datei eine gültige Formatierung aufweist und korrekte Daten enthält. Ungültige CSV-Dateien können zu Konvertierungsfehlern führen.

- Überprüfen Sie vor der Ausführung des Skripts, ob die angegebenen Dateipfade und -namen korrekt sind und dass Schreibzugriff auf den Zielordner besteht.

- Das Skript überschreibt eine vorhandene JSON-Datei mit dem gleichen Namen im Zielord

ner. Stellen Sie sicher, dass keine wichtigen Daten verloren gehen, wenn Sie den gleichen Dateinamen verwenden.

- Wenn Sie Probleme oder Fehler beim Ausführen des Skripts haben, überprüfen Sie, ob Node.js ordnungsgemäß installiert ist und die Abhängigkeiten korrekt installiert wurden.

- Weitere Informationen zur Verwendung des csvtojson-Moduls finden Sie in der [Dokumentation](https://www.npmjs.com/package/csvtojson).

- Dieses Skript wurde mit Node.js entwickelt und getestet. Es kann auf anderen JavaScript-Plattformen möglicherweise nicht ordnungsgemäß funktionieren.



