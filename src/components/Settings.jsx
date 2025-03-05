const Settings = () => {
    return (
      <div>
        <center>
        <h1>Settings</h1>
        <hr></hr>
        <p>Dark Mode:</p>
        <button onClick={DarkMode} id="DarkModeBtn">
          <div id="p1">Dark Mode On</div>
        </button>
        </center>
      </div>
  )
  };

  function DarkMode() {
    var element = document.body;
    var button = document.getElementById("DarkModeBtn");
    element.classList.toggle("dark-mode");
    button.classList.toggle("DarkModeBtn");

    var x = document.getElementById("p1");
      if (x.innerHTML === "Dark Mode On") {
        x.innerHTML = "Dark Mode Off";
      } else {
        x.innerHTML = "Dark Mode On";
    }
 }
  
  export default Settings;