import { App } from 'vue'
import ElContainer from './container.vue'
import ElHeader from './header.vue'
import ElFooter from './footer.vue'
import ElMain from './main.vue'
import ElAside from './aside.vue'



export default {
	install(app:App) {
		app.component(ElContainer.name, ElContainer)
		app.component(ElHeader.name, ElHeader)
		app.component(ElFooter.name, ElFooter)
		app.component(ElMain.name, ElMain)
		app.component(ElAside.name, ElAside)
	}
}