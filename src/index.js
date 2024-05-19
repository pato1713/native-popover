class Popover {
    constructor(popoverElemet, targetElement) {
        this.popover = popoverElemet;
        this.target = targetElement;
        this.offset = 10;
        this.init();
    }

    get isOpen() {
        return this.popover.matches(":popover-open")
    }

    init() {
        this.popover.style.setProperty("margin", "0");
        this.popover.style.setProperty("visibility", "hidden");
        this.popover.addEventListener("toggle", this.toggleHandler.bind(this))
        this.popover.addEventListener("beforetoggle", this.beforeToggleHandler.bind(this));
    }

    toggleHandler() {
        if (!this.isOpen) return;
        this.calculatePopoverPosition();
        this.popover.style.setProperty("visibility", "visible")
    }

    beforeToggleHandler() {
        if (!this.isOpen) return;
        this.popover.style.setProperty("visibility", "hidden");
    }

    calculatePopoverPosition() {
        const position = this.popover.dataset['position'];
        const rect = this.target.getBoundingClientRect();

        switch (position) {
            case "bottom-center":
            case "bottom": {
                this.popover.style.setProperty("top", `${rect.top + this.target.clientHeight + this.offset}px`);
                this.popover.style.setProperty("left", `${rect.left + (this.target.clientWidth - this.popover.clientWidth) / 2}px`);
                break;
            }
            case "bottom-right": {
                this.popover.style.setProperty("top", `${rect.top + this.target.clientHeight + this.offset}px`);
                this.popover.style.setProperty("left", `${rect.left}px`);
                break;
            }
            case "bottom-left": {
                this.popover.style.setProperty("top", `${rect.top + this.target.clientHeight + this.offset}px`);
                this.popover.style.setProperty("left", `${rect.left + this.target.clientWidth - this.popover.clientWidth}px`);
                break;
            }
            case "right": {
                this.popover.style.setProperty("top", `${rect.top}px`);
                this.popover.style.setProperty("left", `${rect.left + this.target.clientWidth + this.offset}px`);
                break;
            }
            case "left": {
                this.popover.style.setProperty("top", `${rect.top}px`);
                this.popover.style.setProperty("left", `${rect.left - this.popover.clientWidth - this.offset}px`);
                break;
            }
            case "top":
            case "top-center": {
                this.popover.style.setProperty("top", `${rect.top - this.offset - this.popover.clientHeight}px`);
                this.popover.style.setProperty("left", `${rect.left + (this.target.clientWidth - this.popover.clientWidth) / 2}px`);
                break;
            }
            case "top-right": {
                this.popover.style.setProperty("top", `${rect.top - this.offset - this.popover.clientHeight}px`);
                this.popover.style.setProperty("left", `${rect.left}px`);
                break;
            }
            case "top-left": {
                this.popover.style.setProperty("top", `${rect.top - this.offset - this.popover.clientHeight}px`);
                this.popover.style.setProperty("left", `${rect.left + this.target.clientWidth - this.popover.clientWidth}px`);
                break;
            }
            default: {
                this.popover.style.setProperty("top", `${rect.top + this.target.clientHeight + this.offset}px`);
                this.popover.style.setProperty("left", `${rect.left + (this.target.clientWidth - this.popover.clientWidth) / 2}px`);
                break;
            }
        }
    }
}

function init() {
    const popoverTargets = document.querySelectorAll("[popovertarget]");
    const popovers = [];
    popoverTargets.forEach(target => popovers.push(new Popover(target.popoverTargetElement, target)));
    new ResizeObserver(() => popovers.forEach(p => p.isOpen && p.calculatePopoverPosition())).observe(document.body);
}

export default init;
