import React, {useEffect, useState} from 'react'
import DashboardHeader from '../../components/DashboardHeader'

import allItems from '../../constants/items'
import {calculateRange, sliceData} from '../../utils/table-pagination'

import '../styles.css'

export default function Items() {
    const initialPagination: number[] = []

    const [search, setSearch] = useState('')
    const [items, setItems] = useState(allItems)
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(initialPagination)

    useEffect(() => {
        setPagination(calculateRange(allItems, 5))
        setItems(sliceData(allItems, page, 5))
    }, [])

    // Search
    const __handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        if (event.target.value !== '') {
            let search_results = items.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
                // || item....toLowerCase().includes(search.toLowerCase())
            )
            setItems(search_results)
        } else {
            __handleChangePage(1)
        }
    }

    // Change Page
    const __handleChangePage = (new_page: number) => {
        setPage(new_page)
        setItems(sliceData(allItems, new_page, 5))
    }

    return (
        <div className="dashboard-content">
            <DashboardHeader btnText="New Course"/>

            <div className="dashboard-content-container">
                <div className="dashboard-content-header">
                    <h2>Items</h2>
                    <div className="dashboard-content-search">
                        <input
                            type="text"
                            value={search}
                            placeholder="Search.."
                            className="dashboard-content-input"
                            onChange={e => __handleSearch(e)}/>
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>Title</th>
                    </thead>

                    {
                        items.length !== 0
                        ? <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td><span>{item.id}</span></td>
                                    <td><span>{item.title}</span></td>
                                </tr>
                            ))}
                        </tbody>
                        : null
                    }
                </table>

                {items.length !== 0 ?
                    <div className="dashboard-content-footer">
                        {pagination.map((item, index) => (
                            <span
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                    :
                    <div className="dashboard-content-footer">
                        <span className="empty-table">No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

