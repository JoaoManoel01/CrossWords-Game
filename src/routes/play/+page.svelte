<script lang="ts">
    import "../../styles/play.css"
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
    <title>How To Play</title>
  </svelte:head>
  
  <div class="cont">
  
      <main class="howmain">
          <div class="cluespart">
            <div class="title1">CROSS WORDS</div>
              <div class="cluestable">
                <div class="clueh1"><h1>Clues Table</h1></div>
                  <ol>
                    <li>Teacher who likes J-Pop (5 ltr) </li>
                    <li>Opposite of Winner (5 ltr) </li>
                    <li>Accompanies coffee (4 ltr) </li>
                    <li>The season after winter (6 ltr) </li>
                    <li>A color of the blood (3 ltr) </li>
                  </ol>
               
              </div>
          </div>
          <div class="line"></div>
          <div class="gridpart">
            <div class="return">
                <a href="../../"><button class="tomenu"><i class="fas fa-sign-out-alt"></i></button></a>
            </div>
              <div class="thegrid">
                <table class="crossword">
                    <tr id="0">
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty">1</td>
                        <td class="empty"></td>
                    </tr>
                    <tr id="0">
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                    </tr>
                    <tr id="1">
                        <td class="empty"></td>
                        <td class="empty">2</td>
                        <td class="empty">3</td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                    </tr>
                    <tr id="2">
                        <td class="empty"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                    </tr>
                    <tr id="3">
                        <td class="empty"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                    </tr>
                    <tr id="4">
                        <td class="empty">4</td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                    </tr>
                    <tr id="5">
                        <td class="empty"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty">
                    </tr>
                    <tr id="6">
                        <td class="empty">5</td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="filled"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                        <td class="empty"></td>
                    </tr>
                </table>
              </div>
          </div>
      </main>
  </div>