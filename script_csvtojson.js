#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

function csvToJson(csvFilePath, jsonFolderPath, jsonFileName) {
  const jsonFilePath = path.join(jsonFolderPath, jsonFileName);

  csv()
    .fromFile(csvFilePath)
    .then((jsonArrayObj) => {
      const jsonData = JSON.stringify(jsonArrayObj, null, 4);
      fs.writeFile(jsonFilePath, jsonData, (err) => {
        if (err) {
          console.error('Fehler beim Schreiben der JSON-Datei:', err);
        } else {
          console.log('Die CSV-Datei wurde erfolgreich in JSON konvertiert.');
        }
      });
    });
}

// Erstelle eine readline-Schnittstelle für die Benutzereingabe
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funktion, um Optionen anzuzeigen und eine Auswahl zu treffen
function promptForOptions(csvFilePath) {
  rl.question('Möchten Sie einen benutzerdefinierten Dateinamen verwenden? (j/n): ', (answer) => {
    if (answer.toLowerCase() === 'j' || answer.toLowerCase() === 'ja') {
      rl.question('Geben Sie den gewünschten Dateinamen ein: ', (jsonFileName) => {
        rl.question('Geben Sie den Pfad zum Zielordner ein: ', (jsonFolderPath) => {
          csvToJson(csvFilePath, jsonFolderPath, jsonFileName);
          rl.close();
        });
      });
    } else {
      rl.question('Geben Sie den Pfad zum Zielordner ein: ', (jsonFolderPath) => {
        const defaultJsonFileName = 'output.json';
        const jsonFileName = defaultJsonFileName;
        csvToJson(csvFilePath, jsonFolderPath, jsonFileName);
        rl.close();
      });
    }
  });
}

// Funktion, um nach dem Pfad zur CSV-Datei zu fragen
function promptForCsvFilePath() {
  rl.question('Geben Sie den Pfad zur CSV-Datei ein: ', (csvFilePath) => {
    promptForOptions(csvFilePath);
  });
}

// Frag nach dem Pfad zur CSV-Datei
promptForCsvFilePath();
