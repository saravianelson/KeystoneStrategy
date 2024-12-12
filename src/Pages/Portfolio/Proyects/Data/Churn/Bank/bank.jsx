import React from "react"
import Navbar from "../../../../../../shared/Navbar/Navbar";
import { Footer } from "../../../../../../shared/Footer/footer";
import "./bank.css"


const Bank = () => {
    return (
        <div className="wrapper">
        <Navbar/>
        <div className="a">
            <h2 className="portfolio-headings">ANÁLISIS DE DATOS</h2>
            <div className="divider"></div>
            <article>
            <div className="bank">
            <img src="public\assets\img\Proyects\Churn\Bank\Total_Trans_Ct.png" alt="" />
                <h3>Objetivo</h3>
                <p>A menudo, las empresas tienen datos que contienen mucha información oculta.<br></br> 
                   Hacer las preguntas correctas y analizar los datos nos dará información relevante.<br></br> 
                   El objetivo es responder a las preguntas correctas que ayudarán a la empresa a<br></br> 
                   tomar las decisiones correctas.</p><br></br>
                <h3>Resultado</h3>
                <p>Los resultados se presentan en un informe con recomendaciones y pasos de seguimiento. <br></br>
                Con base en este informe, se pueden tomar decisiones claras y bien fundadas, se pueden<br></br>
                ahorrar costos y optimizar los procesos.</p><br></br>
                <h3>CASO - ¿Cómo optimizar el embudo de clientes?</h3>
                <h3></h3>
            </div>
            </article>
        </div>
        <Footer />
        </div>
)
}

export default Bank;