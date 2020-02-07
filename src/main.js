import React from 'react'
import { render } from 'react-dom'
import Menu from './components/menu'
import data from '../mocker/recipes.json'

window.React = React

render(
    <Menu recipes={data.recipes} /> ,
    document.getElementById("app")

)