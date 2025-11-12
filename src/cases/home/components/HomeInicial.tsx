import ListCategory from "@/cases/categories/components/listCategories";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function HomeInicial () {

    return(
        <>
            <Header />
            <main>
                <div className="w-full my-10 flex justify-center gap-2">
                    <div className="border-2">
                        <img src="../../../public/images/manutencao.jpg" alt="manutencao" className="
                        w-xl m-auto
                        "/>
                    </div>
                    <div className="max-w-2/10 px-5">
                        <h2 className="text-right text-2xl"><strong>Título</strong></h2> <br />
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse, sapiente labore ullam debitis aut, laborum voluptas corporis illo quas blanditiis consequuntur praesentium obcaecati tempora odio quidem dolorem aliquid quibusdam?</p>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse, sapiente labore ullam debitis aut, laborum voluptas corporis illo quas blanditiis consequuntur praesentium obcaecati tempora odio quidem dolorem aliquid quibusdam?</p>
                    </div>
                </div>
                <div className="
                max-w-9/10 w-fit m-auto
                ">
                    <ListCategory />
                </div>
            </main>
            <Footer />
        </>
    )
}