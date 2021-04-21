import React from 'react'
import {NavLink} from 'react-router-dom'

function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {
                categories.map((cat, index) =>{
                    return <button type="button"className="btn-projects" onClick={()=>filter(cat)}>
                        {cat}
                    </button>

                })
            }
        </div>
    )
}

export default Categories
