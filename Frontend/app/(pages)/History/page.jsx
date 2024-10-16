'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
const page = () => {
  const [name, setName] = useState("التاسيس")
  const [desc , setDesc] = useState("تاسس نادي الزمالك في 5 يناير عام 1911 من قبل البلجيكي جورج مرزباخ ليضم في عضويته في البداية المصريين والاجانب")
  const data = [
    {
      name : "التاسيس",
      title : "1911",
      description : "تاسس نادي الزمالك عام 1911 من قبل البلجيكي جورج مرزباخ ليضم في عضويته في البداية المصريين والاجانب",
    },
    {
      name : "اول لقب رسمي للنادي",
      title : "1921",
      description : "فوز الزمالك باول القابه الرسمية عام 1921 بالفوز بلقب كاس السلطان حسين",
      right :true
    },
    {
      name : "تغير اسم النادي بعد رعاية الملكية للنادي",
      title: "1941",
      description: "تغير اسم النادي من المختلط الي نادي فاروق من ملك مصر الملك فاروق بعد ان نال الرعاية الملكية وتم تعيين اسماعيل شيرين باشا رئيسا للنادي",
    },
    {
      name : "اكبر فوز في تاريخ الدربي",
      title: "1942",
      description: " الفوز في الديربي علي الاهلي 6-0 عن طريق اهداف عبد الرحمن فوزي (هدفين) وعبد الكريم صقر (هدفين)وعمر شندي وحلمي زامورا",
      right :true
    },
    {
      name : " الانتقال الي المقر الحالي",
      title : "1952",
      description : " تغيير اسم نادي فاروق للمرة الثالثة والاخيرة الي الاسم الحالي نادي الزملك ووالانتقال الي المقر الحالي في ميت عقبة",
    },
    {
      name : "افتتاح ملعب النادي في ميت عقبة",
      title : "1959",
      description : "افتتاح ملعب حلمي زامورا وبسعه 20 الف الي 40 الف مشجع قبل الانتقال للعب االمباريات الرسمية الي ملعب القاهرة ",
      right :true
    },
    {
      name : "اول بطولة دوري في تاريخ النادي",
      title : "1960",
      description : "الفوز باول بطولة دوري في تاريخ النادي بقائمة لاعبين تضم اساطير مثل محمود ابو رجيلة و حماده امام واحمد رفعت ونبيل نصير",
    },
    {
      name : "اول بطولة افريقية في تاريخ النادي",
      title : "1984",
      description : "الفوز باول بطولة افريقي بالفوز علي شوتنج ستارز النيجيري 3-0 في المجموع بقائمة لاعبين تضم اشرف قاسم ومحمد صلاح و ايمن يونس و جمال عبد الحميد وكوارشي وفاروق جعفر",
      right :true
    },
    {
      name : "اول بطولة كاس افرواسيوية في تاريخ النادي",
      title : "1987",
      description : "اول بطولة علي مستوي الكاس الافرواسيوية علي مستوي الاندية المصري بالفوز علي فوراكوا الكتريك الياباني 2-0",
    },
    {
      name : "الفوز علي الغريم الاهلي والتتويج باول سوبر افريقي",
      title : "1994",
      description : " اول تتويج بالسوبر الافريقي بالفوز علي الاهلي في جوهانسبرج بجنوب افريقيا بهدف ايمن منصور القاتل ",
      right :true
    },
    {
      name : "اول نادي مصري يتأهل الي كاس العالم للاندية",
      title : "2001",
      description : "الزمالك هو اول نادي يتأهل لكاس العالم الاندية علي مستوي الاندية المصرية لفوزه بكأس الكؤوس الافريقية",
      
    },
    {
      name : "اول فريق مصري يتوج بكاس العرب للاندية الابطال",
      title : "2003",
      description: " الفوز بكأس الاندية العربية الابطال كاول نادي مصري يتوج بها علي حساب الكويت الكويتي",
      right :true
    },
    {
      name : "الافضل في العالم",
      title : "2003",
      description : " افضل نادي في العالم من قبل الاتحاد الدولي للتاريخ والاحصاء خلال عام 2003 بهد تتويجه ب 7 بطولات في موسم واحد",
    },
    {
      name : " احتفالية الزمالك بمرور 100 عام علي تأسيس النادي",
      title : "2011",
      description : " احتفالية نادي الزمالك بمرور المئوية الاوله وملاقاة اتلتيكو مدريد في استادالقاهرة",
      right :true
    },
    {
      name : "الحصول علي برونزية كاس العالم لكرة اليد في اول مشاركة",
      title : "2010",
      description : " الحصول علي برونزية كاس العالم لكرة اليد في اول مشاركة لفريق اليد في البطولة ",
    },
    {
      name : "الفوز بكاس الكونفدرالية الافريقية الاولي في تاريخ النادي",
      title : "2019",
      description : " الفوز بكاس الكونفدرالية الافريقية الاولي في تاريخ النادي بعد الفوز علي نهضة بركان بركلات الترجيح",
      right :true
    },
    {
      name : "افتتاح قناة الزمالك",
      title : "2020",
      description: " افتتاح قناة الزمالك في نهاية يناير من عام 2020 في عهد رئيس النادي السابق مرتضي منصور",
    },
  ]
  return (
    <div className='min-h-[100vh] w-full bg-MODE1-primary dark:bg-MODE2-primary'>
      <div className='flex items-center gap-3 flex-col left pt-[100px] pb-[50px] px-[100px]'>
        <span className='text-MODE1-third dark:text-MODE2-third text-2xl font-bold'>{name}</span>
        <p className='text-MODE1-add dark:text-MODE2-add text-base'>{desc}</p>
      </div>
      <div className='timeline relative max-w-[1200px] mx-auto mt-[100px]'>
        {
          data.map((item, index) => {
            return (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 , delay: 1*index }} key={index} className={`relative  py-[10px] px-[50px] w-[50%] h-[130px] flex items-center justify-center  cont ${item.right ? "left-[50.4%]" : ""}`}>
                <span
                  onClick={() => {
                  setName(item.name)
                  setDesc(item.description)
                  }}
                  className={`text-MODE1-secondary ${item.right ? "absolute -left-6 itemNumRight" : "itemNumLeft"} `}
                >
                  {item.title}
                </span>
                <div  key={index}  className='text_box p-5 font-bold left rounded-xl w-[100%] bg-MODE1-third text-MODE1-primary dark:bg-MODE2-third dark:text-MODE2-secondary left text-xl'>
                  <h3 className='text-MODE1-primary dark:text-MODE2-primary text-xl font-bold'>{item.name}</h3>
                  {/* <p>{item.description}</p> */}
                </div>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}

export default page