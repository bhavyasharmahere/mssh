"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [1564], {
        1564: (j, d, a) => {
            a.r(d), a.d(d, {
                HomePageModule: () => b
            });
            var p = a(177),
                o = a(4742),
                g = a(4341),
                l = a(8986),
                u = a(467),
                e = a(4438);

            function m(t, n) {
                if (1 & t && (e.j41(0, "swiper-slide"), e.nrm(1, "ion-img", 68), e.k0s()), 2 & t) {
                    const r = n.$implicit;
                    e.R7$(), e.Y8G("src", r.img)
                }
            }

            function h(t, n) {
                if (1 & t && (e.j41(0, "swiper-slide")(1, "ion-card", 69)(2, "ion-card-header")(3, "ion-card-title", 70), e.EFF(4), e.k0s()(), e.j41(5, "ion-card-content")(6, "ion-grid")(7, "ion-row")(8, "ion-col"), e.nrm(9, "ion-img", 71), e.k0s()()()()()()), 2 & t) {
                    const r = n.$implicit;
                    e.R7$(4), e.JRh(r.title), e.R7$(5), e.Y8G("src", r.imgUrl)
                }
            }

            function f(t, n) {
                if (1 & t) {
                    const r = e.RV6();
                    e.j41(0, "swiper-slide")(1, "ion-card", 72), e.bIt("click", function() {
                        const s = e.eBV(r).index,
                            c = e.XpG();
                        return e.Njj(c.presentAlert(s))
                    }), e.j41(2, "ion-card-header")(3, "ion-card-title", 73), e.EFF(4), e.k0s()(), e.j41(5, "ion-card-content")(6, "ion-grid")(7, "ion-row")(8, "ion-col", 74), e.nrm(9, "ion-img", 24), e.k0s()()()()()()
                }
                if (2 & t) {
                    const r = n.$implicit;
                    e.R7$(4), e.JRh(r.title), e.R7$(5), e.Y8G("src", r.imgUrl)
                }
            }
            const w = [{
                path: "",
                component: (() => {
                    var t;
                    class n {
                        constructor(i, s, c, v) {
                            this.router = i, this.menuCtrl = s, this.alertController = c, this.renderer = v, this.breakpoints = {
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                }
                            }, this.slides = [{
                                img: "assets/icon/slide/slide1.jpeg",
                                caption: "Slide 4"
                            }, {
                                img: "assets/icon/slide/slide2.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/slide/slide3.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/slide/slide4.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/slide/slide5.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/slide/slide6.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/slide/slide7.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/slide/slide8.jpeg",
                                caption: "Slide 8"
                            }, {
                                img: "assets/icon/slide/slide9.jpeg",
                                caption: "Slide 9"
                            }, {
                                img: "assets/icon/slide/slide10.jpeg",
                                caption: "Slide 10"
                            }, {
                                img: "assets/icon/slide/slide11.jpeg",
                                caption: "Slide 11"
                            }, {
                                img: "assets/icon/slide/slide12.jpeg",
                                caption: "Slide 12"
                            }, {
                                img: "assets/icon/slide/slide13.jpeg",
                                caption: "Slide 13"
                            }, {
                                img: "assets/icon/slide/slide14.jpeg",
                                caption: "Slide 14"
                            }, {
                                img: "assets/icon/slide/slide15.jpeg",
                                caption: "Slide 15"
                            }, {
                                img: "assets/icon/slide/slide16.jpeg",
                                caption: "Slide 16"
                            }, {
                                img: "assets/icon/slide/slide17.jpeg",
                                caption: "Slide 17"
                            }, {
                                img: "assets/icon/slide/slide18.jpeg",
                                caption: "Slide 18"
                            }, {
                                img: "assets/icon/slide/slide19.jpeg",
                                caption: "Slide 19"
                            }], this.images = [{
                                img: "assets/icon/p1.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/p2.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/p3.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/p4.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/p5.jpeg",
                                caption: "Slide 5"
                            }, {
                                img: "assets/icon/p6.jpeg",
                                caption: "Slide 5"
                            }], this.treatment = [{
                                title: "Prostate Treatments (TURP)",
                                imgUrl: "assets/icon/turp.jpeg",
                                dis: "Transurethral resection of the prostate (TURP) is a common surgery that's used to treat urinary problems that are caused by an enlarged prostate. An instrument called a resectoscope is placed through the tip of the penis. It is then passed through the tube that carries urine from your bladder, called the urethra. The resectoscope helps a surgeon see and trim away extra prostate tissue that's blocking urine flow. TURP tends to be considered an effective treatment choice for men who have moderate to serious urinary problems that haven't gotten better with medicine."
                            }, {
                                title: "Ureterorenoscopy (URS)",
                                imgUrl: "assets/icon/urs.jpeg",
                                dis: "Ureterorenoscopy (URS) is a minimally invasive procedure to diagnose and treat conditions in the ureter and kidneys, such as kidney stones, obstructions, or strictures. Using a thin ureteroscope, doctors can visualize the urinary tract, remove stones, or perform repairs without external incisions. Key Benefits: Effective for kidney stones and blockages. Minimally invasive with faster recovery. Performed as a day-care procedure."
                            }, {
                                title: "Percutaneous Nephrolithotomy (PCNL)",
                                imgUrl: "assets/icon/pcnl.jpeg",
                                dis: "Percutaneous Nephrolithotomy (PCNL) is a minimally invasive procedure to remove large kidney stones through a small incision in the back. It is highly effective for stones larger than 2 cm or resistant to other treatments. Key Benefits: Removes large or complex stones. Minimally invasive with quick recovery."
                            }, {
                                title: "Retrograde Intrarenal Surgery (RIRS)",
                                imgUrl: "assets/icon/rirs1.jpeg",
                                dis: "Retrograde Intrarenal Surgery (RIRS) is a minimally invasive procedure to treat kidney stones and other kidney issues. It uses a flexible ureteroscope inserted through the urinary tract to access the kidney without incisions. A laser is used to break stones into smaller fragments for removal or natural passage. RIRS is effective for stones under 2 cm, hard-to-reach stones, or cases where other treatments failed. It offers a shorter recovery time and fewer complications."
                            }, {
                                title: "Bladder Cancer Treatment (TURBT)",
                                imgUrl: "assets/icon/turbt.jpeg",
                                dis: "Transurethral Resection of Bladder Tumor (TURBT) is a minimally invasive procedure used to treat bladder cancer. A resectoscope is inserted through the urethra to remove tumors and cauterize the area. It's done under anesthesia with a short recovery time. Post-procedure, further treatments like chemotherapy or immunotherapy may be needed to prevent recurrence."
                            }, {
                                title: "Kidney Cancer Treatment",
                                imgUrl: "assets/icon/kidcantre.jpeg",
                                dis: "Kidney cancer treatment includes surgery (radical or partial nephrectomy), ablative techniques (cryoablation or RFA), targeted therapy, immunotherapy, and sometimes radiation therapy. Treatment depends on the cancer's stage, size, and the patient's health. Active surveillance may be used for small, slow-growing tumors."
                            }, {
                                title: "Urothelial Cancer Treatments",
                                imgUrl: "assets/icon/urocantre.jpeg",
                                dis: "Urothelial Cancer Treatment includes surgery, chemotherapy, immunotherapy, targeted therapy, and radiation therapy, tailored to the cancer stage and patient health. The goal is to control the disease, extend survival, and improve quality of life."
                            }, {
                                title: "Urogynecology Treatments",
                                imgUrl: "assets/icon/urogyntre.jpeg",
                                dis: "Urogynecology Treatments focus on managing pelvic floor disorders through lifestyle changes, medications, physical therapy, minimally invasive procedures, and reconstructive surgery to restore function and improve quality of life."
                            }, {
                                title: "Uroflowmetry Diagnostics",
                                imgUrl: "assets/icon/uroflowdia.jpeg",
                                dis: "Uroflowmetry is a diagnostic test that measures the flow rate, volume, and pattern of urine during voiding. It helps evaluate urinary tract function and diagnose conditions like obstruction, incontinence, or weak bladder muscles."
                            }, {
                                title: "Stricture Urethra Surgery (OIU)",
                                imgUrl: "assets/icon/oiu.jpeg",
                                dis: "Stricture Urethra Surgery (Optical Internal Urethrotomy - OIU) is a minimally invasive procedure to treat urethral strictures. It involves using a cystoscope with a specialized blade to remove or widen the narrowed segment of the urethra, restoring normal urine flow."
                            }, {
                                title: "Urethroplasty",
                                imgUrl: "assets/icon/urethro.jpeg",
                                dis: "Urethroplasty is a surgical procedure to repair or reconstruct the urethra, commonly used to treat urethral strictures. It involves removing scar tissue or using grafts (e.g., from the mouth) to restore normal urine flow and urethral function."
                            }, {
                                title: "Pyeloplasty",
                                imgUrl: "assets/icon/pyeloplasty.jpeg",
                                dis: "Pyeloplasty is a surgical procedure to correct a blockage or narrowing in the ureteropelvic junction (UPJ), where the kidney meets the ureter. It restores normal urine flow from the kidney to the bladder, relieving symptoms and preventing kidney damage."
                            }, {
                                title: "Cystoscopy",
                                imgUrl: "assets/icon/cystoscopy.jpeg",
                                dis: "Cystoscopy is a diagnostic and therapeutic procedure that uses a thin, flexible tube with a camera (cystoscope) to examine the inside of the bladder and urethra. It helps diagnose conditions like infections, stones, tumors, or urinary tract abnormalities."
                            }, {
                                title: "VVF Repair",
                                imgUrl: "assets/icon/vvf.jpeg",
                                dis: "Vesicovaginal Fistula (VVF) Repair is a surgical procedure to close an abnormal connection between the bladder and vagina. It restores normal urinary function, prevents leakage, and improves quality of life."
                            }, {
                                title: "Prostate Biopsy",
                                imgUrl: "assets/icon/probio.jpeg",
                                dis: "Prostate Biopsy is a diagnostic procedure where small tissue samples are taken from the prostate gland using a needle, guided by ultrasound or MRI. It helps detect prostate cancer or other abnormalities."
                            }, {
                                title: "Endourological Surgeries",
                                imgUrl: "assets/icon/endosur.jpeg",
                                dis: "Endourological Surgeries are minimally invasive procedures performed through the urinary tract using specialized instruments. These surgeries treat conditions like kidney stones, urethral strictures, and tumors without the need for large incisions, typically involving techniques such as cystoscopy, ureteroscopy, and laser treatment."
                            }, {
                                title: "Holmium Laser Procedures (TFL Laser)",
                                imgUrl: "assets/icon/tfl.jpeg",
                                dis: "Holmium Laser Procedures (TFL Laser) use a high-powered laser to treat urological conditions such as kidney stones, benign prostate enlargement, and tumors. The laser is used to break up stones or remove tissue, offering minimally invasive treatment with quicker recovery times."
                            }, {
                                title: "Prostate Cancer Surgery",
                                imgUrl: "assets/icon/procansur.jpeg",
                                dis: "Prostate Cancer Surgery typically involves the removal of the prostate gland (prostatectomy) to treat localized prostate cancer. The procedure can be performed via traditional open surgery or minimally invasive techniques, such as robotic-assisted surgery, to remove cancerous tissue and reduce the risk of recurrence."
                            }, {
                                title: "Laparoscopic Gynecological Surgeries",
                                imgUrl: "assets/icon/lapgynsur.jpeg",
                                dis: "Laparoscopic Gynecological Surgeries are minimally invasive procedures performed through small incisions using a camera and specialized instruments. These surgeries treat conditions like ovarian cysts, fibroids, endometriosis, and infertility, offering quicker recovery and less pain compared to traditional open surgery."
                            }, {
                                title: "Male Infertility Solutions",
                                imgUrl: "assets/icon/mainso.jpeg",
                                dis: "Male Infertility Solutions address causes of male infertility through treatments such as medication, surgery, lifestyle changes, and assisted reproductive techniques. Options include hormone therapy, varicocele repair, sperm retrieval procedures (e.g., TESE), and in vitro fertilization (IVF) with ICSI to help achieve conception."
                            }, {
                                title: "Gynecological and Obstetric Services",
                                imgUrl: "assets/icon/gyobse.jpeg",
                                dis: "Gynecological and Obstetric Services provide comprehensive care for women\u2019s reproductive health, including routine screenings, treatment of disorders like fibroids, endometriosis, and infections, as well as prenatal, delivery, and postnatal care. Services cover family planning, fertility treatment, high-risk pregnancy management, and menopause care."
                            }, {
                                title: "Normal Delivery",
                                imgUrl: "assets/icon/nordel.jpeg",
                                dis: "Normal Delivery refers to the vaginal birth of a baby without the need for surgical intervention, such as a cesarean section. It typically involves the natural progression of labor and delivery, with the baby being born through the birth canal, accompanied by medical support to ensure the safety of both mother and child."
                            }, {
                                title: "Cesarean Sections",
                                imgUrl: "assets/icon/cessec.jpeg",
                                dis: "Cesarean Section (C-Section) is a surgical procedure where a baby is delivered through an incision in the mother's abdomen and uterus. It is performed when vaginal delivery poses risks to the mother or baby, such as fetal distress, breech presentation, or complications during labor."
                            }], this.facilities = [{
                                title: "Outpatient Department (OPD)",
                                imgUrl: "assets/icon/opd.jpeg"
                            }, {
                                title: "Advanced Modular OT",
                                imgUrl: "assets/icon/ot.png"
                            }, {
                                title: "Intensive Care Unit (ICU)",
                                imgUrl: "assets/icon/icu.jpeg"
                            }, {
                                title: "Specialized Wards",
                                imgUrl: "assets/icon/speward.jpeg"
                            }, {
                                title: "Pathology Laboratory",
                                imgUrl: "assets/icon/path.jpeg"
                            }, {
                                title: "Pharmacy and Medicine",
                                imgUrl: "assets/icon/med.png"
                            }, {
                                title: "Cafeteria",
                                imgUrl: "assets/icon/cafeteria.jpeg"
                            }, {
                                title: "Lift Facilities",
                                imgUrl: "assets/icon/lift.jpeg"
                            }], this.alertButtons = [{
                                text: "OK",
                                role: "confirm",
                                handler: () => {}
                            }], this.router.events.subscribe(k => {
                                k instanceof l.Z && this.menuCtrl.close()
                            })
                        }
                        ngOnInit() {
                            const i = this.renderer.createElement("script");
                            i.src = "https://static.elfsight.com/platform/platform.js", i.async = !0, this.renderer.appendChild(document.body, i), this.menuCtrl.enable(!0)
                        }
                        openMenu() {
                            this.menuCtrl.open()
                        }
                        closeMenu() {
                            this.menuCtrl.close()
                        }
                        presentAlert(i) {
                            var s = this;
                            return (0, u.A)(function*() {
                                yield(yield s.alertController.create({
                                    header: s.treatment[i].title,
                                    message: s.treatment[i].dis,
                                    buttons: s.alertButtons,
                                    cssClass: "custom-alert"
                                })).present()
                            })()
                        }
                    }
                    return (t = n).\u0275fac = function(i) {
                        return new(i || t)(e.rXU(l.Ix), e.rXU(o._t), e.rXU(o.hG), e.rXU(e.sFG))
                    }, t.\u0275cmp = e.VBU({
                        type: t,
                        selectors: [
                            ["app-home"]
                        ],
                        decls: 236,
                        vars: 9,
                        consts: [
                            [1, "ion-page"],
                            [2, "background-color", "#00796b", "border-radius", "10px 100px / 120px"],
                            [1, "ion-hide-md-up", 2, "display", "flex", "justify-content", "start"],
                            [2, "color", "white"],
                            [1, "ion-hide-md-down", 2, "display", "flex", "justify-content", "center"],
                            [2, "display", "flex"],
                            ["routerLink", "/home", 2, "color", "white"],
                            ["routerLink", "/about", 2, "color", "white"],
                            ["routerLink", "/procedure", 2, "color", "white"],
                            ["routerLink", "/doctor", 2, "color", "white"],
                            ["routerLink", "/gallery", 2, "color", "white"],
                            ["routerLink", "/blog", 2, "color", "white"],
                            ["routerLink", "/contact", 2, "color", "white"],
                            [2, "width", "100%"],
                            [2, "z-index", "10000", "position", "fixed", "bottom", "20px", "right", "20px"],
                            ["target", "_blank"],
                            ["alt", "", 2, "width", "50px", "height", "50px", 3, "src"],
                            [2, "background-color", "white"],
                            [2, "background-color", "#48a89c", "border-top-left-radius", "500px", "border-top-right-radius", "500px"],
                            ["size", "12", 2, "display", "flex", "justify-content", "center", "margin-top", "5px"],
                            ["alt", "", 2, "width", "140px", "padding", "0", 3, "src"],
                            ["size", "12", 2, "text-align", "center"],
                            ["size", "12", "sizeLg", "4", 2, "text-align", "center"],
                            ["size", "4"],
                            ["alt", "", 3, "src"],
                            ["size", "8"],
                            [2, "font-size", "larger", "font-weight", "bold", "color", "#110264"],
                            [2, "font-size", "small", "font-weight", "bold"],
                            ["offsetLg", "0", "sizeLg", "4", "offset", "1", "size", "10"],
                            ["autoplay-delay", "2000", 2, "height", "250px"],
                            [4, "ngFor", "ngForOf"],
                            ["size", "12"],
                            ["size", "12", "sizeLg", "10", "offsetLg", "1", 2, "text-align", "center"],
                            ["offsetLg", "1", "sizeLg", "10", "size", "12"],
                            ["pagination", "true", "loop", "true", "pagination-clickable", "true", "navigation", "true", 3, "breakpoints"],
                            ["pagination-clickable", "true", "navigation", "true", 3, "breakpoints"],
                            ["offsetLg", "3", "sizeLg", "6", "size", "12"],
                            ["pagination", "true", "pagination-clickable", "true", "loop", "true", "space-between", "10", "slides-per-view", "1", "navigation", "true"],
                            [2, "text-align", "center"],
                            [2, "width", "100%", "height", "100%"],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/FVPLyWxkRJc?si=w5Ao3jekQJktyPe2`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/5HTOMthHc9Q?si=y_nZOzkUX20sfLSw`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/ZCpzHZ_Q06o?si=xfhtffrwqjR1tF-0`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/8mRHCkcLDjc?si=eGHtprZTVCq4bF8r`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/ZZsgbrX3VlA?si=KqLmcLZE8MvpxX8s`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/h6yTHahsFWI?si=18rR3Ycx4c8XnFGW`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/-FJ_7K_wHZ4?si=SrTFRhoMVmV98l-Y`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/ZWwkQzQ0jEU?si=HFe-_7fdBhaEJRbB`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/Sp4LizOJ0RM?si=Opd6BChe7CVjopPj`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/hIQcleSCzG0?si=pTArqTjPTINlo7Vl`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["width", "100%", "height", "315", "src", e.wXG `https://www.youtube.com/embed/videoseries?si=DPBOX5knviPX9PVZ&list=PL-dQdauX24kZ1TvU1eZZ-6-GlIb7u-K3y`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""],
                            ["size", "12", "sizeLg", "8", "offsetLg", "2"],
                            [1, "footer_section", "layout_padding"],
                            ["size", "12", "sizeLg", "4"],
                            ["routerLink", "/about", 2, "color", "white", "font-size", "medium"],
                            ["routerLink", "/procedure", 2, "color", "white", "font-size", "medium"],
                            ["routerLink", "/doctor", 2, "color", "white", "font-size", "medium"],
                            ["routerLink", "/gallery", 2, "color", "white", "font-size", "medium"],
                            ["routerLink", "/blog", 2, "color", "white", "font-size", "medium"],
                            ["name", "location-outline", 2, "color", "white", "width", "25px", "height", "25px"],
                            ["name", "call-outline", 2, "color", "white", "width", "25px", "height", "25px"],
                            [2, "display", "flex", "justify-content", "center"],
                            ["href", "https://www.facebook.com/share/1D4KBWSDdJ/", "target", "_blank"],
                            ["name", "logo-facebook", 2, "color", "white", "width", "30px", "height", "30px"],
                            ["name", "logo-twitter", 2, "color", "white", "width", "30px", "height", "30px"],
                            ["name", "logo-linkedin", 2, "color", "white", "width", "30px", "height", "30px"],
                            [1, "copyright_text"],
                            ["href", "https://www.ftstsolution.com/", "target", "_blank"],
                            [3, "src"],
                            [2, "text-align", "center", "margin", "0", "padding", "0", "color", "#e3f2fd"],
                            [2, "color", "#0288d1", "font-family", "'Times New Roman'", "font-weight", "bold"],
                            ["alt", "", 2, "display", "block", 3, "src"],
                            [2, "text-align", "center", "margin", "0", "padding", "0", "color", "#e3f2fd", 3, "click"],
                            [2, "color", "#28a745", "font-weight", "bold", "font-family", "'Times New Roman'"],
                            [2, "width", "60%", "height", "60%"]
                        ],
                        template: function(i, s) {
                            1 & i && (e.j41(0, "div", 0)(1, "ion-header")(2, "ion-grid")(3, "ion-row", 1)(4, "ion-col", 2), e.nrm(5, "ion-menu-button", 3), e.k0s(), e.j41(6, "ion-col", 4)(7, "ul", 5)(8, "li")(9, "a", 6), e.EFF(10, "Home"), e.k0s()(), e.j41(11, "li")(12, "a", 7), e.EFF(13, "About Us"), e.k0s()(), e.j41(14, "li")(15, "a", 8), e.EFF(16, "Procedure"), e.k0s()(), e.j41(17, "li")(18, "a", 9), e.EFF(19, "Doctors"), e.k0s()(), e.j41(20, "li")(21, "a", 10), e.EFF(22, "Gallery"), e.k0s()(), e.j41(23, "li")(24, "a", 11), e.EFF(25, "Blog"), e.k0s()(), e.j41(26, "li")(27, "a", 12), e.EFF(28, "Contact Us"), e.k0s()()()()()()(), e.j41(29, "ion-content", 13)(30, "div", 14)(31, "a", 15), e.nrm(32, "ion-img", 16), e.k0s()(), e.j41(33, "ion-card", 17)(34, "ion-grid")(35, "ion-row", 18)(36, "ion-col", 19), e.nrm(37, "ion-img", 20), e.k0s(), e.j41(38, "ion-col", 21)(39, "p", 3), e.EFF(40, " Opposite Tribhuwan School, Vijay Singh Yadav Path, Ashopur, Khagaul Road, Patna "), e.k0s()()(), e.j41(41, "ion-row")(42, "ion-col", 22)(43, "ion-row")(44, "ion-col", 23), e.nrm(45, "ion-img", 24), e.k0s(), e.j41(46, "ion-col", 25)(47, "p", 26), e.EFF(48, " Dr. Gaurav Mishra "), e.k0s(), e.j41(49, "p", 27), e.EFF(50, " MBBS (Gold Medalist), MS (Gold Medalist) "), e.k0s(), e.nrm(51, "p", 27), e.j41(52, "p", 27), e.EFF(53, " Mch, (Urology) IGIMS, PATNA "), e.k0s(), e.j41(54, "p", 27), e.EFF(55, " Ex-Consultant & Head Mahavir Cancer Sansthan "), e.k0s()()()(), e.j41(56, "ion-col", 28)(57, "swiper-container", 29), e.DNE(58, m, 2, 1, "swiper-slide", 30), e.k0s()(), e.j41(59, "ion-col", 22)(60, "ion-row")(61, "ion-col", 23), e.nrm(62, "ion-img", 24), e.k0s(), e.j41(63, "ion-col", 25)(64, "p", 26), e.EFF(65, " Dr. Urvashi Mishra "), e.k0s(), e.j41(66, "p", 27), e.EFF(67, " MBBS (Gold Medalist) "), e.k0s(), e.j41(68, "p", 27), e.EFF(69, " MS (Obs & Gynae) PMCH Patna "), e.k0s(), e.j41(70, "p", 27), e.EFF(71, " Ex-Sr. IGIMS, Patna "), e.k0s()()()()(), e.j41(72, "ion-row")(73, "ion-col", 31)(74, "h2"), e.EFF(75, "Welcome to Patna Uro Gynae & Stone Hospital"), e.k0s()()(), e.j41(76, "ion-row")(77, "ion-col", 32)(78, "p"), e.EFF(79, " Welcome to Patna Uro-Gynae & Stone Hospital, led by Dr. Gaurav Mishra, a renowned urologist, and Dr. Urvashi Mishra, an expert Gynaecologist and Obstetrician, offers exceptional care in urology and women's health. With their expertise and dedication, the hospital stands as a trusted center for quality healthcare in Patna. "), e.k0s()()(), e.j41(80, "ion-row")(81, "ion-col", 31)(82, "h3"), e.EFF(83, "Facilities Available"), e.k0s()()(), e.j41(84, "ion-row")(85, "ion-col", 32)(86, "p"), e.EFF(87, " Our hospital is equipped with state-of-the-art infrastructure and facilities to ensure a comfortable and efficient patient experience, including: "), e.k0s()(), e.j41(88, "ion-col", 33)(89, "swiper-container", 34), e.DNE(90, h, 10, 2, "swiper-slide", 30), e.k0s()()(), e.j41(91, "ion-row")(92, "ion-col", 31)(93, "h3"), e.EFF(94, "Our Specialties and Services"), e.k0s()()(), e.j41(95, "ion-row")(96, "ion-col", 32)(97, "p"), e.EFF(98, " We offer advanced and comprehensive treatments for a wide range of urological, gynecological, and stone-related conditions. Our available services include: "), e.k0s()()(), e.j41(99, "ion-row")(100, "ion-col", 31)(101, "h4"), e.EFF(102, "Treatment"), e.k0s()(), e.j41(103, "ion-col", 33)(104, "swiper-container", 35), e.DNE(105, f, 10, 2, "swiper-slide", 30), e.k0s()()(), e.j41(106, "ion-row")(107, "ion-col", 31)(108, "h3"), e.EFF(109, "Why Choose Us?"), e.k0s()()(), e.j41(110, "ion-row")(111, "ion-col", 32)(112, "p"), e.EFF(113, " Our hospital is equipped with state-of-the-art technology, ensuring precision and efficiency in treatments. We focus on patient-centric care, offering tailored medical solutions to meet individual needs. "), e.k0s()()(), e.j41(114, "ion-row")(115, "ion-col", 31)(116, "h4"), e.EFF(117, "Videos"), e.k0s()(), e.j41(118, "ion-col", 36)(119, "swiper-container", 37)(120, "swiper-slide")(121, "ion-grid")(122, "ion-row", 38)(123, "ion-col", 39), e.nrm(124, "iframe", 40), e.k0s()()()(), e.j41(125, "swiper-slide")(126, "ion-grid")(127, "ion-row", 38)(128, "ion-col", 39), e.nrm(129, "iframe", 41), e.k0s()()()(), e.j41(130, "swiper-slide")(131, "ion-grid")(132, "ion-row", 38)(133, "ion-col", 39), e.nrm(134, "iframe", 42), e.k0s()()()(), e.j41(135, "swiper-slide")(136, "ion-grid")(137, "ion-row", 38)(138, "ion-col", 39), e.nrm(139, "iframe", 43), e.k0s()()()(), e.j41(140, "swiper-slide")(141, "ion-grid")(142, "ion-row", 38)(143, "ion-col", 39), e.nrm(144, "iframe", 44), e.k0s()()()(), e.j41(145, "swiper-slide")(146, "ion-grid")(147, "ion-row", 38)(148, "ion-col", 39), e.nrm(149, "iframe", 45), e.k0s()()()(), e.j41(150, "swiper-slide")(151, "ion-grid")(152, "ion-row", 38)(153, "ion-col", 39), e.nrm(154, "iframe", 46), e.k0s()()()(), e.j41(155, "swiper-slide")(156, "ion-grid")(157, "ion-row", 38)(158, "ion-col", 39), e.nrm(159, "iframe", 47), e.k0s()()()(), e.j41(160, "swiper-slide")(161, "ion-grid")(162, "ion-row", 38)(163, "ion-col", 39), e.nrm(164, "iframe", 48), e.k0s()()()(), e.j41(165, "swiper-slide")(166, "ion-grid")(167, "ion-row", 38)(168, "ion-col", 39), e.nrm(169, "iframe", 49), e.k0s()()()(), e.j41(170, "swiper-slide")(171, "ion-grid")(172, "ion-row", 38)(173, "ion-col", 39), e.nrm(174, "iframe", 50), e.k0s()()()()()()(), e.j41(175, "ion-row")(176, "ion-col", 31)(177, "h4"), e.EFF(178, "Clinic Testimonial"), e.k0s()(), e.j41(179, "ion-col", 51)(180, "p"), e.EFF(181, " At Patna Uro Gynae & Stone Hospital, we take immense pride in transforming lives through our advanced treatments and compassionate care. Here are some testimonials from patients who have experienced our world-class services firsthand. "), e.k0s()(), e.nrm(182, "ion-col", 31), e.k0s(), e.j41(183, "ion-row", 52)(184, "ion-col", 53)(185, "div")(186, "h4", 3), e.EFF(187, "Useful Links"), e.k0s()(), e.j41(188, "div")(189, "ul")(190, "li")(191, "a", 54), e.EFF(192, "About"), e.k0s()(), e.j41(193, "li")(194, "a", 55), e.EFF(195, "Procedures"), e.k0s()(), e.j41(196, "li")(197, "a", 56), e.EFF(198, "Doctors"), e.k0s()(), e.j41(199, "li")(200, "a", 57), e.EFF(201, "Gallery"), e.k0s()(), e.j41(202, "li")(203, "a", 58), e.EFF(204, "Blog"), e.k0s()()()()(), e.j41(205, "ion-col", 53)(206, "h4", 3), e.EFF(207, "Contact Us"), e.k0s(), e.j41(208, "div", 5), e.nrm(209, "ion-icon", 59), e.j41(210, "p", 3), e.EFF(211, " Opposite Tribhuwan School, Vijay Singh Yadav Path, Ashopur, Khagaul Road, Patna "), e.k0s()(), e.j41(212, "div", 5), e.nrm(213, "ion-icon", 60), e.j41(214, "p", 3), e.EFF(215, "7481943963"), e.k0s(), e.j41(216, "p", 3), e.EFF(217, "8789505757"), e.k0s()()(), e.j41(218, "ion-col", 53)(219, "h4", 3), e.EFF(220, "Get in Touch"), e.k0s(), e.j41(221, "div", 61)(222, "a", 62), e.nrm(223, "ion-icon", 63), e.k0s(), e.j41(224, "a", 62), e.nrm(225, "ion-icon", 64), e.k0s(), e.j41(226, "a", 62), e.nrm(227, "ion-icon", 65), e.k0s()()(), e.j41(228, "ion-col", 31)(229, "p", 66), e.EFF(230, " Copyright \xa9 2025 Patna Uro Gynae & Stone Hospital | Powered by Patna Uro Gynae & Stone Hospital "), e.k0s()(), e.j41(231, "ion-col", 31)(232, "p", 66), e.EFF(233, " Design by: "), e.j41(234, "a", 67), e.EFF(235, "FTST Solution Pvt. Ltd."), e.k0s()()()()()()()()), 2 & i && (e.R7$(32), e.Y8G("src", "https://ftstsolution.com/files/devData/WhatsApp_icon.png"), e.R7$(5), e.Y8G("src", "assets/icon/logo.png"), e.R7$(8), e.Y8G("src", "assets/icon/gauravpic.jpeg"), e.R7$(13), e.Y8G("ngForOf", s.slides), e.R7$(4), e.Y8G("src", "assets/icon/urvashi.jpeg"), e.R7$(27), e.Y8G("breakpoints", s.breakpoints), e.R7$(), e.Y8G("ngForOf", s.facilities), e.R7$(14), e.Y8G("breakpoints", s.breakpoints), e.R7$(), e.Y8G("ngForOf", s.treatment))
                        },
                        dependencies: [p.Sq, o.b_, o.I9, o.ME, o.tN, o.hU, o.W9, o.lO, o.eU, o.iq, o.KW, o.MC, o.ln, o.oY, l.Wk],
                        styles: [".navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:center;list-style:none;margin:0;padding:0}.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px}a[_ngcontent-%COMP%]{text-decoration:none;color:#3880ff;font-size:16px;font-weight:700;transition:color .3s ease}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1e62d0}ion-card[_ngcontent-%COMP%]{background-color:beige}h2[_ngcontent-%COMP%]{font-family:Times New Roman;font-weight:700;color:#036;font-size:50px;text-align:center;margin-top:20px}h3[_ngcontent-%COMP%]{font-family:Times New Roman;font-weight:700;color:#036;font-size:40px;text-align:center;margin-top:20px}h4[_ngcontent-%COMP%]{font-family:Times New Roman;color:#0d47a1;text-align:center;font-family:sans-serif;font-weight:700}ion-menu-button[_ngcontent-%COMP%]::part(icon){width:35px;height:35px}swiper-container[_ngcontent-%COMP%]::part(button-next){font-size:20px;width:20px;height:20px}swiper-container[_ngcontent-%COMP%]::part(button-prev){font-size:20px;width:20px;height:20px}p[_ngcontent-%COMP%]{font-size:medium;font-family:sans-serif;margin:10px auto;font-weight:700;width:80%;text-align:center;color:#333}.footer_section[_ngcontent-%COMP%]{width:100%;float:left;background-color:#00796b;height:auto}.layout_padding[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:0}.input_bt[_ngcontent-%COMP%]{width:60%;margin:0 auto;text-align:center;display:flex;border-bottom:1px solid #ffffff!important}.mail_bt[_ngcontent-%COMP%]{width:100%;float:left;font-size:18px;color:#fff;background-color:transparent;padding:5px 0;height:60px;border:0px}input.mail_bt[_ngcontent-%COMP%]::placeholder{color:#fff}.subscribe_bt[_ngcontent-%COMP%]{width:30%;float:right;font-size:16px;color:#f26522;background-color:transparent;padding:20px 0 5px;border-radius:30px;border:0px;text-transform:uppercase;text-align:right}.subscribe_bt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f26522}.subscribe_bt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.footer_menu[_ngcontent-%COMP%]{width:100%;margin:0 auto;text-align:center}.location_main[_ngcontent-%COMP%]{width:100%;margin:0 auto;padding-top:30px;text-align:center}.location_main[_ngcontent-%COMP%]{float:left;font-size:16px;color:#fff;padding:30px}.location_main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.location_main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f26522}.copyright_text[_ngcontent-%COMP%]{width:100%;float:left;color:#fff;text-align:center;font-size:16px;margin:20px 0}.copyright_text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4d4d4d}.copyright_text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f26522}strong[_ngcontent-%COMP%]{color:#f4f4f4}.custom-alert[_ngcontent-%COMP%]   ion-alert[_ngcontent-%COMP%]{--background: #f4f4f4;--color: #333;--border-radius: 10px}.custom-alert[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#0078d7}.custom-alert[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%]{font-size:16px;line-height:1.5;color:#00796b;justify-content:center}.custom-alert[_ngcontent-%COMP%]   .button-inner[_ngcontent-%COMP%]{font-weight:700;color:#fff;background:#0078d7;border-radius:5px}ul[_ngcontent-%COMP%]{text-align:center;list-style:none;margin:0;padding:0}li[_ngcontent-%COMP%]{margin:10px}"]
                    }), n
                })()
            }];
            let y = (() => {
                    var t;
                    class n {}
                    return (t = n).\u0275fac = function(i) {
                        return new(i || t)
                    }, t.\u0275mod = e.$C({
                        type: t
                    }), t.\u0275inj = e.G2t({
                        imports: [l.iI.forChild(w), l.iI]
                    }), n
                })(),
                b = (() => {
                    var t;
                    class n {}
                    return (t = n).\u0275fac = function(i) {
                        return new(i || t)
                    }, t.\u0275mod = e.$C({
                        type: t
                    }), t.\u0275inj = e.G2t({
                        imports: [p.MD, g.YN, o.bv, g.X1, y]
                    }), n
                })()
        }
    }
]);