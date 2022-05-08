import BannerSearch from "@/Components/BannerSearch";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import TextLoop from "react-text-loop/lib/components/TextLoop";

import ItemList from "./ItemList";
import Search from "./Search";

const Home = ({events,sports,movies}) => {

    //console.log(events.data)
    return (
        <Layout title="Inicio">
            <BannerSearch img="/img/home/img-banner.jpg" search={true}>
                <div>
                    <h1 className="font-bold">
                        RESERVA TU ENTRADAS PARA TU
                        <TextLoop>
                            <Link className="ml-1 text-emerald-400" to="/">
                                PELÍCULAS
                            </Link>
                            <Link className="ml-1 text-emerald-400" to="/">
                                DEPORTES
                            </Link>
                            <Link className="ml-1 text-emerald-400" to="/">
                                EVENTOS
                            </Link>
                        </TextLoop>
                    </h1>
                    <p className="mt-5 font-medium md:text-xl xl:text-2xl">
                        Emisión de boletos segura y confiable. ¡Su boleto para
                        entretenimiento en vivo!
                    </p>
                </div>
            </BannerSearch>
            <div>
                <Search />
            </div>

            <ItemList
                title="Peliculas"
                linkText="Ver todas las peliculas"
                items={movies.data}
            />

            <div className="bg-dark-blue-800">
                <ItemList
                    title="Eventos"
                    linkText="Ver todos los Eventos"
                    items={events.data}
                />
            </div>

            <ItemList
                title="Deportes"
                linkText="Ver todos los Deportes"
                items={sports.data}
            />
        </Layout>
    );
};

export default Home;
