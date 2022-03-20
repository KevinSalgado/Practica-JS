const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let poketipo=data.types[0].type.name;
            let pokeh1=data.abilities[0].ability.name;
            let pokeh2=data.abilities[1].ability.name;
            let pokeHp=data.stats[0].base_stat;
            let pokeAt=data.stats[1].base_stat;
            let pokeDef=data.stats[2].base_stat;
            let pokeSattack=data.stats[3].base_stat;
            let pokeSdefense=data.stats[4].base_stat;
            let pokeHei=data.height;
            let pokeWei=data.weight;
            console.log(poketipo);
            pokeImage(pokeImg);
            poketype(poketipo);
            pokeha1(pokeh1);
            pokeha2(pokeh2);
            pokeHpp(pokeHp);
            pokeAtaque(pokeAt);
            pokeDefensa(pokeDef);
            pokeSat(pokeSattack);
            pokeSdef(pokeSdefense);
            pokeAlt(pokeHei);
            pokePeso(pokeWei);
            //console.log(pokeImg);
            //console.log(pokeHp);
            
        }
    });

    /*fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let arreglo=[0,1,2,3,4];
            let pokeHp = data.stats.0;
            //pokehp(pokeHp);
            console.log(pokeHp);
        }
    });*/

}

const pokePeso=(dato)=>{
    const pokeWeiCambio=document.getElementById("wei");
    pokeWeiCambio.textContent=dato;
}

const pokeAlt=(dato)=>{
    const pokeAltCambio=document.getElementById("altura");
    pokeAltCambio.textContent=dato;
}

const pokeSdef=(dato)=>{
    const pokeSdefCambio=document.getElementById("Sdefense");
    pokeSdefCambio.textContent=dato;
}

const pokeSat=(dato)=>{
    const pokeSatCambio=document.getElementById("Sataque");
    pokeSatCambio.textContent=dato;
}

const pokeDefensa=(dato)=>{
    const pokeDefCambio=document.getElementById("defensa");
    pokeDefCambio.textContent=dato;
}

const pokeAtaque=(dato)=>{
    const pokeAtCambio=document.getElementById("ataque");
    pokeAtCambio.textContent=dato;
}

const pokeHpp=(dato)=>{
    const pokeHpCambio=document.getElementById("pokehp");
    pokeHpCambio.textContent=dato;
}

const pokeha2=(h2)=>{
    const pokeH2Cambio=document.getElementById("habilidad2");
    pokeH2Cambio.textContent=h2;
}

const pokeha1=(h1)=>{
    const pokeH1Cambio=document.getElementById("habilidad1");
    pokeH1Cambio.textContent=h1;
}

const poketype=(tipo)=>{
    const pokeTipoCambio=document.getElementById("tipovalor");
    pokeTipoCambio.textContent=tipo;
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

