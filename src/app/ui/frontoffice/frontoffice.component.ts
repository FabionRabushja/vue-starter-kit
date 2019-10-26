import { Component, Vue } from "vue-property-decorator";
import WithRender from './frontoffice.component.html';

@WithRender
@Component({
    style: require('./frontoffice.scss')
})
export default class FrontofficeComponent extends Vue {}
