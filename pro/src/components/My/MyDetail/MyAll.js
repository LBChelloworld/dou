import React, { Component } from 'react'
import all from "./MyAll.module.css"

export default class MyAll extends Component {
    render() {
        return (
            <div>
                <h2 className={all.notMenu}>这里什么都没有~</h2>
            </div>
        )
    }
}