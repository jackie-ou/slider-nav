let slider = document.querySelector(".slider");
let li = document.querySelectorAll(".navigation ul li");

let index_value = 0;
let left_position = 0;

li.forEach((item, index) => {
  // Setting initial width and left position to slider.
  slider.style.width = li[0].clientWidth + "px";
  slider.style.left = left_position + "px";

  item.addEventListener("click", () => {
    slider.style.width = item.clientWidth + "px";
    // console.log(index);
    index_value = index;
    get_left_position();
    slider.style.left = left_position + "px";
    left_position = 0;
  });
});

// Getting left position for slider to slide.
function get_left_position() {
  for (let i = 0; i < index_value; i++) {
    const element = li[i];
    left_position += element.clientWidth;
    // console.log(left_position);
  }
}
