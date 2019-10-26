import { Component, Vue } from "vue-property-decorator";
import HeaderComponent from "@/app/ui/components/header/header.component.ts"; // @ is an alias to /src
import WithRender from './home.component.html';

@WithRender
@Component({
    components: {
        HeaderComponent
    },
    style: require('./home.scss')
})
export default class HomeComponent extends Vue {}
