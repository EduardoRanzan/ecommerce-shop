import ListCategories from "@/cases/categories/components/listCategories";
import { Separator } from "@/components/ui/separator";

export default function Home () {

    return(
        <div>
            <div className="w-full mt-10 flex justify-center gap-2">
                <div>
                    <img src="/images/manutencao.jpg" alt="manutencao" className="
                    w-xl m-auto
                    "/>
                </div>
                <div className="max-w-2/10 px-5">
                    <h2 className="text-right text-2xl"><strong>Título</strong></h2> <br />
                    <p className="text-justify line-clamp-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse, sapiente labore ullam debitis aut, laborum voluptas corporis illo quas blanditiis consequuntur praesentium obcaecati tempora odio quidem dolorem aliquid quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse, sapiente labore ullam debitis aut, laborum voluptas corporis illo quas blanditiis consequuntur praesentium obcaecati tempora odio quidem dolorem aliquid quibusdam?</p>
                </div>
            </div>
            
            <Separator className="max-w-9/10 m-auto my-10"/>
            <div className="max-w-9/10 m-auto">
                <ListCategories />
            </div>
        </div>
    )
}