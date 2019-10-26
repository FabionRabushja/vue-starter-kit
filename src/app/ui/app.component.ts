import { Component, Vue } from "vue-property-decorator";
import WithRender from './app.component.html';

@WithRender
@Component({
    style: require('./app.component.scss')
})
export default class AppComponent extends Vue {}
