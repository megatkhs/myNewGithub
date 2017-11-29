function Observer() {
  this.listeners = {};
}

Observer.prototype.on = function(event, func) {
  if(! this.listeners[event]) {
    this.listeners[event] = [];
  }
  this.listeners[event].push(func);
};

Observer.prototype.off = function (event, func) {
  let ref = this.listeners[event],
      len = ref.length;
  for(let i = 0; i < len; i++) {
    let listener = ref[i];
    if(listener === func) {
      ref.splice(i, 1);
    }
  }
};

Observer.prototype.trigger = function(event) {
  let ref = this.listeners[event],
      len = ref.length;
  for(let i = 0; i < len; i++) {
    let listener = ref[i];
    if(typeof listener === "function") listener();
  }
};

let observer = new Observer();

let greet = function() {
  console.log("Good morning");
  observer.trigger("greet");
};

let start = function() {
  console.log("始まるよ");
};

observer.on("greet", start);

greet();
