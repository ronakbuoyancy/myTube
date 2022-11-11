import React, { useState } from 'react'
import styles from './Category.module.css'
function Category({ setCategoryName, activeCategory, setIsNoDataFound, setFindCategory }) {
    const categoryList = [
        {
            name: 'all'
        },
        {
            name: 'gaming'
        },
        {
            name: 'music'
        },
        {
            name: 'movie'
        },
        {
            name: 'live'
        },
        {
            name: 'mixes'
        },
        {
            name: 'react'
        },
        {
            name: 'stock'
        },
    ]
    return (
        <div className={styles.category}>
            {categoryList.map((item, index) => (
                <div key={index} className={styles.categoryList}>
                    <p className={item.name === activeCategory ? styles.active : styles.notActive}
                        onClick={() => {
                            // console.log(activeCategory);
                            setCategoryName(item.name)
                            setIsNoDataFound(false)
                            setFindCategory('')
                        }}>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Category