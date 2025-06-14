
var lagu = [
  ['Secukupnya', 'Hindia', '53M', '300k', 'cukupp.jpeg', 'Secukupe.mp3'],
  ['Rumah Ke Rumah', 'Hindia', '99M', '1M', 'cukup.jpeg', 'Rumah song.mp3'],
  ['Nina', '.Feast', '57M', '900K', 'nina.jpeg', 'Nina song.mp3'],
  ['Walking Back Home', 'Vira Talisa', '6.4M', '260K', 'home.jpeg', 'Walking song.mp3'],
  ['Begini Begitu', 'Maliq & D`Essentials', '1.3M', '140K', 'begini.jpeg', 'Begini song.mp3'],
  ['Kami Belum Tentu', '.Feast', '12M', '600K', 'kamiblm.jpeg', 'Kami song.mp3'],
  ['Mild High Club', 'Homage', '18M', '710K', 'mild.jpeg', 'Mild song.mp3'],
  ['No surprises', 'Radiohead', '258M', '3.2M', 'no.jpeg', 'Radio song.mp3'],
  ['No.1 Party Anthem', 'Arctic Monkeys', '85M', '1.2M', 'party.jpeg', 'Anthem song.mp3'],
  ['There is no light that never goes out', 'The smiths', '79M', '1M', 'smith.jpg', 'smiths.mp3'],
  ['Mr. Loverman', 'Ricky Montgomery', '62M', '785K', 'mr.jpg', 'lover.mp3'],
  ['Abadi', 'Dendi nata', '23M', '106K', 'abadi.jpg', 'abadii.mp3'],
];

var element = `` 
for (let i = 0; i < lagu.length; i++) {
  element += `<div class="lagu">
                <h2>${lagu[i][0]}</h2>
                <small>
                     <i>Oleh ${lagu[i][1]}</i>
                </small>
                <img id="cover" src="img/${lagu[i][4]}" alt="" srcset="">
                <audio controls id="audio-player">
                  <source src="audio/${lagu[i][5]}" type="audio/mp3">
                </audio>
                <div class="bawah">
                     <div class="kanan">${lagu[i][2]}</div>
                     <div class="kiri">${lagu[i][3]}</div>
                </div>
              </div>`
}



var konten = document.getElementById("container");

konten.innerHTML=element;

