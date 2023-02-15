async function run() {
  var i = 0; //  set your counter to 1
  let u1 = [],
    u2 = [],
    u3 = [],
    u4 = [];
  let scroll_to_bottom = document.querySelectorAll(".scroller-kQBbkU")[0];

  for (const a of document.querySelectorAll("button")) {
    if (a.textContent.includes("U1")) {
      u1.push(a);
    }
    if (a.textContent.includes("U2")) {
      u2.push(a);
    }
    if (a.textContent.includes("U3")) {
      u3.push(a);
    }
    if (a.textContent.includes("U4")) {
      u4.push(a);
    }
  }

  console.log("length: ", u1.length);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const delayTime = 100 * 1000;

  async function load() {
    for (var i = 0; i < u1.length; i++) {
      console.log("image ", i);
      if (u1[i] !== null && u1[i] !== undefined) {
        if (u1[i].className.includes("colorPrimary-2AuQVo")) {
          u1[i].click();
          await timer(delayTime);
        }
      }

      if (u2[i] !== null && u2[i] !== undefined) {
        if (u2[i].className.includes("colorPrimary-2AuQVo")) {
          u2[i].click();
          await timer(delayTime);
        }
      }

      if (u3[i] !== null && u3[i] !== undefined) {
        if (u3[i].className.includes("colorPrimary-2AuQVo")) {
          u3[i].click();
          await timer(delayTime);
        }
      }

      if (u4[i] !== null && u4[i] !== undefined) {
        if (u4[i].className.includes("colorPrimary-2AuQVo")) {
          u4[i].click();
          await timer(delayTime);
        }
      }
    }
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
    await timer(delayTime);
    run();
  }
  load();
}

run();
