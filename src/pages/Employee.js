import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useStore } from 'react-redux'

const Employee = () => {
    const store = useStore()
    const state = useSelector((state) => state)
    return (
        <div className="body">
            <Link className="main-nav" to="/">
                <h1 className="sr-only">Home</h1>
            </Link>
            <h1>Current Employees {state.firstName}</h1>
        </div>
    )
}

export default Employee
