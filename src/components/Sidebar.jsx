import React from 'react'

const Sidebar = () =>
{
    return (
        <div>
            <nav className="sidebar">
                <div className="menu-content">
                    <ul className="menu-items" style={{ padding: 0 }}>
                        <div className="menu-title">GWING Products</div>

                        <li className="item">
                            <a href="/app">
                                Products
                            </a>
                        </li>
                        <li className="item">
                            <a href="/app/create-product">
                                New Product
                            </a>
                        </li>
                        <li className="item">
                            <a href="/app/update-product">
                                Upadte Product
                            </a>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Sidebar
