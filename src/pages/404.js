import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="o-layout o-layout--center u-margin-top-huge">
      <div className="o-layout__item u-text-center">
        <h2>Nieznaleziono strony - błąd 404</h2>
        <p className="u-margin-bottom-huge">Strona nie istnieje lub została przeniesiona.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
