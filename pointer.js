const pointer = {
    container: document.querySelector(".pointer"),
    current_target: null,
    init() {
        window.addEventListener("mousemove", this.move.bind(this));
        this.bind_targets_events();
    },
    move(e) {
        let x = e.clientX;
        let y = e.clientY;
        if (this.current_target) {
            const rect = this.current_target.getBoundingClientRect();
            const center_x = rect.left + rect.width / 2;
            const center_y = rect.top + rect.height / 2;
            x = center_x + (x - center_x) * 0.1;
            y = center_y + (y - center_y) * 0.1;
        }
        this.container.style.transform = `translate(${x}px, ${y}px)`;
    },
    bind_targets_events() {
        [...document.querySelectorAll("._target")].forEach(ele => {
            ele.onmouseenter = () => {
                this.current_target = ele;
                const rect = ele.getBoundingClientRect();
                this.container.style.setProperty("--width", rect.width + innerWidth / 50 + "px");
                this.container.style.setProperty("--height", rect.height + innerWidth / 50 + "px");
                this.container.style.opacity = "1";
            };
            ele.onmouseleave = () => {
                this.current_target = null;
                this.container.style.setProperty("--width", "4rem");
                this.container.style.setProperty("--height", "4rem");
                this.container.style.opacity = "0.08";
            };
        });
    }
};
pointer.init();