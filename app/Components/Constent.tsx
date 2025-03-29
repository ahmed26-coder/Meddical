interface dataServices {
id: string;
title: string;
}

interface dataSpecialties {
    id: string;
    title: string;
}

interface dataDoctors {
    id: string;
    img: string;
    dish: string;
    title: string;
    button: string;
}

interface dataNews {
    id: string;
    img: string;
    dish: string;
    title: string;
    number1: string;
    number2: string;
}

interface dataNav {
    id: string;
    title: string;
    link: string;
}

interface dataService {
    id: string;
    img: string;
    title: string;
    dish: string;
    button: string;
}

export const DataServices: dataServices[] = [
    {
        id:"1",
        title:"A Passion for Healing"
    },
    {
        id:"2",
        title:"5-Star Care"
    },
    {
        id:"3",
        title:"All our best"
    },
    {
        id:"4",
        title:"Believe in Us"
    },
    {
        id:"5",
        title:"A Legacy of Excellence"
    },
    {
        id:"6",
        title:"Always Caring"
    },
];

export const DataSpecialties: dataSpecialties[] =[
    {
        id:"1",
        title:"Neurology",
    },
    {
        id:"2",
        title:"Bones",
    },
    {
        id:"3",
        title:"Oncology",
    },
    {
        id:"4",
        title:"Otorhinolaryngology",
    },
    {
        id:"5",
        title:"Ophthalmology",
    },
    {
        id:"6",
        title:"Cardiovascular",
    },
    {
        id:"7",
        title:"Pulmonology",
    },
    {
        id:"8",
        title:"Renal Medicine",
    },
    {
        id:"9",
        title:"Gastroenterology",
    },
    {
        id:"10",
        title:"Urology",
    },
    {
        id:"11",
        title:"Dermatology",
    },
    {
        id:"12",
        title:"Gynaecology",
    },
];
export const DataDoctors: dataDoctors[] = [
    {
        id:"1",
        img:"/doctors1.jpg",
        dish:"Doctor’s Name",
        title:"Neurology",
        button:"View Profile",
    },
    {
        id:"2",
        img:"/doctors2.jpg",
        dish:"Doctor’s Name",
        title:"Neurology",
        button:"View Profile",
    },
    {
        id:"3",
        img:"/doctors3.jpg",
        dish:"Doctor’s Name",
        title:"Neurology",
        button:"View Profile",
    },
];
export const DataNews: dataNews[] = [
    {
        id:"1",
        img:"/news.jpg",
        dish:"Monday 05, September 2021 | By Author",
        title:"This Article’s Title goes Here, but not too long.",
        number1:"68",
        number2:"86",
    },
    {
        id:"2",
        img:"/news.jpg",
        dish:"Monday 05, September 2021 | By Author",
        title:"This Article’s Title goes Here, but not too long.",
        number1:"68",
        number2:"86",
    },
    {
        id:"3",
        img:"/news.jpg",
        dish:"Monday 05, September 2021 | By Author",
        title:"This Article’s Title goes Here, but not too long.",
        number1:"68",
        number2:"86",
    },
    {
        id:"4",
        img:"/news.jpg",
        dish:"Monday 05, September 2021 | By Author",
        title:"This Article’s Title goes Here, but not too long.",
        number1:"68",
        number2:"86",
    },
];
export const DataNav: dataNav[] = [
    {
        id:"1",
        title:"Home",
        link:"/",
    },
    {
        id:"2",
        title:"About Us",
        link:"/About",
    },
    {
        id:"3",
        title:"Services",
        link:"/Services",
    },
    {
        id:"4",
        title:"Doctors",
        link:"/Doctors",
    },
    {
        id:"5",
        title:"Contact Us",
        link:"/Contact",
    },
];
export const DataService: dataService[] = [
    {
        id:"1",
        img:"/img5.png",
        title:"Free Checkup",
        dish:"Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        button:"Learn More",
    },
    {
        id:"2",
        img:"/img5.png",
        title:"Free Checkup",
        dish:"Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        button:"Learn More",
    },
    {
        id:"3",
        img:"/img5.png",
        title:"Free Checkup",
        dish:"Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        button:"Learn More",
    },
    {
        id:"4",
        img:"/img5.png",
        title:"Free Checkup",
        dish:"Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        button:"Learn More",
    },
    {
        id:"5",
        img:"/img5.png",
        title:"Free Checkup",
        dish:"Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        button:"Learn More",
    },
    {
        id:"6",
        img:"/img5.png",
        title:"Free Checkup",
        dish:"Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        button:"Learn More",
    },
];