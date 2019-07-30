import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import aplicacao1 from '../template/aplicacao1'
import Conteudos from '../conteude01/conteudos01'

export default props => (

    <Router history={ hashHistory }>
        <Route path='/pagina1' component={Conteudos} />

        <Route path='/contact' component={aplicacao1}/> 
        <Redirect from='*' to='/pagina1' />
    </Router>

)
