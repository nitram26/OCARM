     // Mapeo de acordes
     const chordMapping = {
      "C": ["C", "D", "E", "F", "G", "A", "B"],
      "D": ["D", "E", "F#", "G", "A", "B", "C#"],
      "E": ["E", "F#", "G#", "A", "B", "C#", "D#"],
      "F": ["F", "G", "A", "Bb", "C", "D", "E"],
      "G": ["G", "A", "B", "C", "D", "E", "F#"],
      "A": ["A", "B", "C#", "D", "E", "F#", "G#"],
      "B": ["B", "C#", "D#", "E", "F#", "G#", "A#"]
  };

  function changeKey() {
      const selectedKey = document.getElementById("keySelector").value;
      const originalKey = "D"; // Suponemos que la canción está en C inicialmente
      const chords = document.querySelectorAll("[data-chord]");

      chords.forEach(chord => {
          const originalChord = chord.getAttribute("data-chord");
          const originalIndex = chordMapping[originalKey].indexOf(originalChord);
          const newChord = chordMapping[selectedKey][originalIndex];
          chord.textContent = newChord;
      });
  }