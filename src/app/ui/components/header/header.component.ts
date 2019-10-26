import { Component, Vue } from 'vue-property-decorator';
import WithRender from './header.component.html';

@WithRender
@Component({
    style: require('./header.scss')
})
export default class HeaderComponent extends Vue {
    public msg = "aaaa";
}
