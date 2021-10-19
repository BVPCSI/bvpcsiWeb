function addTeam()
{
    const members = [
        {
            name: "Vishal Sharma",
            role: "SBC",
            imgsrc: "images/AboutUsImages/csipeople/StudentCoordinator/VishalSharma.jpg"
        },
        {
            name: "Eesha Gupta",
            role: "Core",
            designation: "President",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371183/Core/Eesha_Gupta__President_d97vcu.jpg" 
        },
        {
            name: "Rishit Jain",
            role: "Core",
            designation: "Vice-President",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371184/Core/Rishit_Jain_Vice_President_gmn17s.jpg"
        },
        {
            name: "Ritik Sharma",
            role: "Core",
            designation: "Vice-President",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598532539/Core/IMG_20200806_223326_pimdh2.jpg"
        },
        {
            name: "Revant Rai Singh",
            role: "Core",
            designation: "General Secretary",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371183/Core/Revant_Singh_Rai_GenSec_g6fdig.jpg"
        },
        {
            name: "Suharsh Pandey",
            role: "Core",
            designation: "General Secretary",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371185/Core/JEE_0561_xolb79.jpg"
        },
        {
            name: "Isha Bansal",
            role: "Core",
            designation: "Joint Secreatary",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371183/Core/Isha_Bansal__JointSec_doulkl.jpg"
        },
        {
            name: "Dishika",
            role: "Core",
            designation: "Joint Secreatary",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371183/Core/Dishika_JointSec_yltesx.jpg"
        },
        {
            name: "Ruchir Ahluwalia",
            role: "Core",
            designation: "Treasurer",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371184/Core/Ruchir_treasurer_zouoei.jpg"
        },
        {
            name: "Raghavi Singhal",
            role: "Core",
            designation: "Treasurer",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371184/Core/Raghavi_Treasurer_aroktz.jpg"
        },
        {
            name: "Nirbhay Jain",
            role: "Web Development Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371651/Web/Nirbhay_Jain_WebD_Head_utawqo.jpg"
        },
        {
            name: "Shivansh Dwivedi",
            role: "Web Development Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371652/Web/Shivansh_Dwivedi_Web_Development_-_Shivansh_Dwivedi_z2n5dt.jpg"
        },
        {
            name: "Aastha Saxena",
            role: "Web Development Team",
            designation: "Admin",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371652/Web/Aastha_Saxena_WebDev_exsquu.jpg"
        },
        {
            name: "Kartik Puri",
            role: "Web Development Team",
            designation: "Admin",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371652/Web/Kartik_Puri_WebDevelopment_-_kartik_puri_lgaeoc.png" 
        },
        {
            name: "Sourav Rawat",
            role: "Web Development Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371657/Web/Sourav_Rawat_tjibqq.jpg"
        },
        {
            name: "Gurjot Singh",
            role: "Event Management Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371362/EM/Gurjot_Singh_Marwah_EM_Head_hy161o.jpg"
        },
        {
            name: "Aryan Atrey",
            role: "Event Management Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371362/EM/CSI_WEBSITE_kqjehv.jpg"
        },
        {
            name: "Ayushmaan Chauhan",
            role: "Event Management Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371362/EM/Ayushmaan_Chauhan_Em_Exec_dn01ty.jpg"
        },
        {
            name: "Amisha Malik",
            role: "Publicity Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371495/Publicity/Amisha_Publicity_Head_tbtrce.jpg"
        },
        {
            name: "Gautam Manocha",
            role: "Publicity Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371495/Publicity/Gautam_Manocha_Publicity_Head_gvay4i.jpg"
        },
        {
            name: "Ishita Sharma",
            role: "Publicity Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371495/Publicity/Ishita_Sharma_-_Ishita_Sharma_x2g1pt.jpg"
        },
        {
            name: "Jahanvi Singh",
            role: "Human Resources Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371393/HR/Jahanvi_Singh_HR_Head_uvwopd.jpg"
        },
        {
            name: "Saniya Kapur",
            role: "Human Resources Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371393/HR/Saniya_Kapur___HR_Head_gwbg7p.jpg"
        },
        {
            name: "Sonam",
            role: "Human Resources Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371393/HR/Sonam_Kumari_-_Sonam_Kumari_j8gcng.png"
        },
        {
            name: "Mansi",
            role: "Public Relations Team",
            designation: "Head",
            imgrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371470/PR/Mansi_Mehndiratta_SSS_-_Mansi_Mehndiratta_f4zrhu.jpg"
        },
        {
            name: "Rahul Rajput",
            role: "Public Relations Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371470/PR/Rahul_Rajput_PR_Head_osvexn.jpg"
        },
        {
            name: "Bhavey Malik",
            role: "Infrastructure and Logistics Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371437/Infra/BhaveyMalik_Infra_and_logistics_-_Bhavey_Malik_nfs6me.jpg"
        },
        {
            name: "Arohi Jain",
            role: "Design and Creativity Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371273/Design/Arohi_Jain_Design_Head_ztr9ut.jpg"
        },
        {
            name: "Kritika",
            role: "Design and Creativity Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371275/Design/IMG20200211161454-1_afkr6n.jpg"
        },
        {
            name: "Deepanshu Tyagi",
            role: "Design and Creativity Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371275/Design/Deepanshu_Tyagi_ljlkas.png"
        },
        {
            name: "Sumit Mishra",
            role: "Technical Team",
            designation: "Mentor",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371627/Tech/SumitMishra_Technical_-_Sumit_Mishra_n2vssa.jpg"
        },
        {
            name: "Abhishek Chawla",
            role: "Technical Team",
            designation: "Admin",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371626/Tech/AbhishekChawla_Technical_-_Abhishek_Chawla_govkbh.jpg"
        },
        {
            name: "Himansh Sharma",
            role: "Technical Team",
            designation: "Admin",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371627/Tech/Himansh_sharma_tech_admin_-_himansh_sharma_jqtit0.jpg"
        },
        {
            name: "Avikal Darolia",
            role: "Technical Team",
            designation: "Admin",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371626/Tech/Avikal_Darolia_Tech_Admin_mub2hi.jpg"  
        },
        {
            name: "Disha Sharma",
            role: "Technical Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371626/Tech/Disha_Sharma_Tech_-_Disha_Sharma_qq6dxh.jpg"
        },
        {
            name: "Piyush Khurana",
            role: "Technical Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371627/Tech/Piyush_Khurana_Tech_Executive_-_Piyush_Khurana_hhbbuq.jpg"
        },
        {
            name: "Kartik Gupta",
            role: "Sponsorship Team",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371580/Sponsor/IMG-5704_fetsmd.jpg"
        },
        {
            name: "Naman",
            role: "Sponsorship Team",
            designation: "Executive",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371579/Sponsor/Naman_Sponsorship_Exec_d0ycoh.jpg"
        },
        {
            name: "Nitya Mathur",
            role: "Social Media",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371549/Socila%20Media/Nitya_Content_-_Nitya_Mathur_gsdekj.jpg"
        },
        {
            name: "Muskan Jaggi",
            role: "Social Media",
            designation: "Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371549/Socila%20Media/Muskan_Jaggi_ohxhkh.jpg" 
        },
        {
            name: "Sagnik Bhattacharya",
            role: "Quizzing and Literature Society",
            designation: "President",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371525/QAL/Sagnik_Bhattacharya_President_QAL_di0cdo.jpg"
        },
        {
            name: "Muskan Jaggi",
            role: "Quizzing and Literature Society",
            designation: "Management Head",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371525/QAL/Muskan_Jaggi_aghztu.jpg"
        },
        {
            name: "Jahanvi Singh",
            role: "Society for Social Services",
            designation: "Mentor",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371601/SSS/Jahanvi_Singh_HR_Head_r1sdvh.jpg"
        },
        {
            name: "Mansi",
            role: "Society for Social Services",
            designation: "Member",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371602/SSS/Mansi_Mehndiratta_SSS_-_Mansi_Mehndiratta_w5hjxn.jpg" 
        },
        {
            name: "Sonam",
            role: "Society for Social Services",
            designation: "Member",
            imgsrc: "https://res.cloudinary.com/www-bvpcsi-com/image/upload/v1598371602/SSS/Sonam_Kumari_-_Sonam_Kumari_gs9jsr.png"
        }
    ];
}