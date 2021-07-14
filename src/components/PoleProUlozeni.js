const UlozitDopole = [];
let PoleSave;
function Pole()
{ 
if(PoleJidelnicek[0][0].length >= 1 || PoleJidelnicek[1][0].length >= 1 || PoleJidelnicek[2][0].length >= 1 || PoleJidelnicek[3][0].length >= 1 || PoleJidelnicek[4][0].length >= 1 || PoleJidelnicek[5][0].length >= 1 )
{
    PoleSave = PoleJidelnicek
}
    if(PoleSave = PoleJidelnicek)
    {
        PoleJidelnicek = [[[],["Snidaně:"]]   ,[["Dopolední Svačina:"]], [["Oběd:"]],  [["Odpolední svačina:"]] , [["Večeře:"]],  [["Druhá večeře:"]]  ] 
        UlozitDopole.push(PoleSave)
    }
}

const SaveDataPole = []

let PoleJidelnicek = [[[],["Snidaně:"],[],[],[],[],[]]   ,[["Dopolední Svačina:"],[],[],[],[],[]], [["Oběd:"],[],[],[],[],[]],  [["Odpolední svačina:"],[],[],[],[],[]] , [["Večeře:"],[],[],[],[],[]],  [["Druhá večeře:"], [],[],[],[],[]]  ]

export {SaveDataPole,PoleJidelnicek, Pole, UlozitDopole};

