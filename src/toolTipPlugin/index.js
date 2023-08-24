import { defineAsyncComponent } from "vue";
import { hideAll } from "tippy.js";
export const tooltipOptionsInject  = Symbol();
export function toolTipPlugin(app, options) {

    options = { 
        arrow: false,
        ...options, 
    };

    if (options.placement) {
        app.provide(tooltipOptionsInject, options)
    }

    app.config.globalProperties.$hideAllTooltips = hideAll;

    app.component(
        'ToolTip', 
        defineAsyncComponent(() => import("./ToolTip.vue"))
    );
    console.log('tooltip Plugin ', options);
}


// Define plugin with Object

// const toolTipPlugin = {
//     install(app, options) {
//         console.log('Hello Plugin');
//     }
// }