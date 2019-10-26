import { Component, Vue } from "vue-property-decorator";
import WithRender from './no-content.component.html';

@WithRender
@Component({
    style: require('./no-content.scss')
})
export default class NoContentComponent extends Vue {}
