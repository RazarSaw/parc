"use client";

import Header from "./header";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

export default function Links() {
  const sections = [
    {
      title: "Miscellaneous",
      links: [
        {
          title: "AC6V's Ham Radio Humour",
          href: "http://www.ac6v.com/humors.htm",
        },
        {
          title: "HAMSTUDY.COM",
          href: "http://www.hamstudy.com/",
        },
        {
          title: "QRZ.COM",
          href: "http://www.qrz.com/",
        },
        {
          title: "Amateur Radio Exam Generator",
          href: "https://www.ic.gc.ca/eic/site/025.nsf/eng/h_00040.html",
        },
        {
          title: "Industry Canada - Amateur Radio",
          href: "http://www.ic.gc.ca/eic/site/smt-gst.nsf/eng/sf01862.html?Open&src=cpromo",
        },
        {
          title: "QSL.NET",
          href: "http://www.qsl.net/",
        },
        {
          title: "AMSAT",
          href: "https://www.amsat.org/",
        },
        {
          title: "Introducing EchoLink",
          href: "http://www.echolink.org/",
        },
        {
          title: "QsoNet",
          href: "http://qsonet.com/",
        },
        {
          title: "ARRL",
          href: "http://www.arrl.org/",
        },
        {
          title: "IRLP, Internet Radio Linking Project",
          href: "http://www.irlp.net/",
        },
        {
          title: "VA3PC",
          href: "http://www.ciinet.org/paul/index.html",
        },
        {
          title: "Bakken Amateur Radio Society",
          href: "http://www.w0mdt.com/w0mdt/Bakken_Amateur_Radio_Society_-_W0MDT.html",
        },
        {
          title: "LOTW, Logbook of the World",
          href: "http://www.arrl.org/logbook-of-the-world",
        },
        {
          title: "VECTOR Vancouver Amateur Radio",
          href: "https://vectorradio.ca/",
        },
        {
          title: "Canadian Forces Affiliate Radio Network",
          href: "http://www.cfarsoperations.ca/",
        },
        {
          title: "N5AU Station Tour",
          href: "http://kkn.net/~k5tr/n5au.html",
        },
        {
          title: "VE3SQB ANTENNA DESIGN PROGRAMS",
          href: "http://www.ve3sqb.com/",
        },
        {
          title: "CQiNet",
          href: "http://cqinet.sourceforge.net/",
        },
        {
          title: "NW7US Amateur and Shortwave Radio",
          href: "http://www.hfradio.org/",
        },
        {
          title: "VE5RI - Super Station",
          href: "http://www.qsl.net/ve5ri/index2.htm",
        },
        {
          title: "eHam.net",
          href: "http://www.eham.net/",
        },
        {
          title: "Radio Amateurs of Canada",
          href: "http://wp.rac.ca/",
        },
        {
          title: "Yahoo Group - EchoLink",
          href: "http://groups.yahoo.com/group/echolink/",
        },
        {
          title: "eQSL.cc",
          href: "http://www.eqsl.cc/qslcard/Index.cfm",
        },
        {
          title: "Saskatchewan Amateur Radio League",
          href: "http://www.sarl.ca",
        },
        {
          title: "Yahoo Group - IRLP",
          href: "http://groups.yahoo.com/group/irlp/",
        },
        {
          title: "fldigi - Fast Light Digital",
          href: "http://www.w1hkj.com/beginners.html",
        },
        {
          title: "Scouts JOTA-JOTI",
          href: "http://jotajoti.info/",
        },
        {
          title: "Summits on the Air (SOTA)",
          href: "https://www.sota.org.uk/",
        },
        {
          title: "HamCall.net",
          href: "http://hamcall.net/",
        },
      ],
    },
    {
      title: "Alberta",
      links: [
        {
          title: "Brooks ARC",
          href: "http://www.eidnet.org/local/tjorgens/",
        },
        {
          title: "Calgary Amateur Radio Assn",
          href: "http://www.cara.ampr.org/",
        },
        {
          title: "Calgary Communications Club",
          href: "http://gwlinton.com/ccc/",
        },
        {
          title: "Central Alberta Radio League",
          href: "http://www.caarc.ca",
        },
        {
          title: "CLAN - Calgary Ladies Amateur Radio Network",
          href: "http://www.geocities.com/CapeCanaveral/Lab/5331",
        },
        {
          title: "Eagle Hill Amateur Radio Society",
          href: "http://www.eharc.net/",
        },
        {
          title: "Foothills Amateur Radio Society",
          href: "http://www.fars.ca/",
        },
        {
          title: "North Central Alberta Amateur Radio Club",
          href: "http://www.ncaarc.ca/",
        },
        {
          title: "Peace Country Amateur Radio Club",
          href: "http://www.qsl.net/ve6arc/",
        },
        {
          title: "Philippine Civil Communications, Inc. (PhilCCOM Inc.)",
          href: "http://www.angelfire.com/or/philccom/",
        },
        {
          title: "Radio Amateur Educational Society",
          href: "http://www.raes.ab.ca/",
        },
        {
          title: "Sask-Alta Radio Club",
          href: "#",
        },
        {
          title: "Southern Alberta Repeater Association",
          href: "http://saralink.ca/",
        },
        {
          title: "South East Alberta Amateur Radio Club",
          href: "http://www.qsl.net/ve6voa/",
        },
        {
          title: "Strathcona Radio Volunteers",
          href: "http://www.qsl.net/srvc/",
        },
        {
          title: "The Northern Alberta Radio Club",
          href: "http://narc.net/index.shtml",
        },
        {
          title: "Westcoast Amateur Radio Association",
          href: "http://www.ve7vic.ca/",
        },
        {
          title: "Wild Rose Chapter 151 - Alberta",
          href: "http://www.qsl.net/ve6afo/",
        },
      ],
    },
    {
      title: "British Columbia & Repeaters",
      links: [
        {
          title: "Arrowsmith ARC",
          href: "http://www.angelfire.com/ar/arrowsmithclub/index.html",
        },
        {
          title: "Base Amateur Radio Service CFB Esquimalt",
          href: "http://www.ve7rcn.ca/",
        },
        {
          title: "BC & Washington 6Meter Repeaters",
          href: "http://www.muircom.com/6meters.htm",
        },
        {
          title: "Beaver Valley Amateur Radio Club",
          href: "http://www.geocities.com/ve7caq/",
        },
        {
          title: "British Columbia Amateur Radio Coordination Council",
          href: "http://hoshi.cic.sfu.ca/~bcarcc/",
        },
        {
          title: "British Columbia DX Club",
          href: "http://www.bcdxc.org/",
        },
        {
          title: "British Columbia FM Communications Association",
          href: "http://www.bcfmca.bc.ca/",
        },
        {
          title: "British Columbia Television Group (BCTVG)",
          href: "http://www.burnabyradio.com/ve7rtv/index.html",
        },
        {
          title: "Burnaby Amateur Radio Club",
          href: "http://www.ve7bar.org/",
        },
        {
          title: "Campus Station VE7OUC -- Amateur (Ham) Radio",
          href: "#",
        },
        {
          title: "Chilliwack Amateur Radio Club",
          href: "http://www.qsl.net/chwkclub/",
        },
        {
          title: "Community Emergency Resource Teams",
          href: "http://www.qsl.net/ekarc/index.htm",
        },
        {
          title: "Creston Valley Amateur Radio Club",
          href: "http://www.crestonbc.com/radioclub/",
        },
        {
          title: "Delta Amateur Radio Society",
          href: "http://www.deltaamateurradio.com/",
        },
        {
          title: "East Kootenay Amateur Radio Club",
          href: "http://www.qsl.net/ekarc/index.htm",
        },
        {
          title: "Hollyburn Amateur Radio Club",
          href: "http://www3.telus.net/harc/",
        },
        {
          title: "Hope Amateur Radio Club",
          href: "http://www.rainbowcountry.bc.ca/harc/",
        },
        {
          title: "Kamloops Amateur Radio Club",
          href: "http://karc.ca/",
        },
        {
          title: "Langley Amateur Radio Club",
          href: "http://www.langleyamateurradio.com/",
        },
        {
          title: "Malaspina College Amateur Radio Society",
          href: "http://www.mala.bc.ca/~mcars/mcars1.htm",
        },
        {
          title: "Maple Ridge Amateur Radio Club",
          href: "http://www.qsl.net/ve7rmr/",
        },
        {
          title: "North Okanagan Radio Amateur Club",
          href: "http://www.norac.bc.ca/",
        },
        {
          title: "North Shore Amateur Radio Club",
          href: "http://www.ve7nsr.ca/",
        },
        {
          title: "Nanaimo Amateur Radio Association",
          href: "http://www.nara.nisa.com/",
        },
        {
          title: "New Westminster Amateur Radio Club (NWARC)",
          href: "http://www.nwarc.org/",
        },
        {
          title: "Oliver Amateur Radio Club",
          href: "http://www3.telus.net/oarc/",
        },
        {
          title: "Orchard City Amateur Radio Club",
          href: "http://www.ocarc.ca/",
        },
        {
          title: "Penticton Amateur Radio Club",
          href: "http://www.ve7prc.ca/",
        },
        {
          title: "Penticton Seniors Radio Club",
          href: "http://www2.vip.net/~bcox/seniorcl.htm",
        },
        {
          title: "PRINCE GEORGE AMATEUR RADIO CLUB",
          href: "http://www.pgarc.org/",
        },
        {
          title: "Shuswap Amateur Radio Club",
          href: "http://www.jetstream.net/sarc/",
        },
        {
          title: "South Okanagan Radio Amateurs Club",
          href: "http://www3.telus.net/sorac/",
        },
        {
          title: "The Nechako Radio Club",
          href: "http://vanderhoof.net/nrc/",
        },
        {
          title: "Thompson River Amateur Radio Club",
          href: "#",
        },
        {
          title: "University Of BC Amateur Radio Society",
          href: "http://www.ars.ams.ubc.ca/",
        },
        {
          title: "Vancouver Area Packet Organization",
          href: "http://www.rainbowcountry.bc.ca/vapo/",
        },
        {
          title: "Vancouvers Amateur Radio program - VECTOR",
          href: "http://www.city.vancouver.bc.ca/police/OpsSupp/eops/vector/index.htm",
        },
        {
          title: "Victoria Amateur Radio Packet Association",
          href: "http://www.horizon.bc.ca/~varpa/",
        },
        {
          title: "Victoria Communications Club",
          href: "http://www.microsec.net/vcc.html",
        },
        {
          title: "West Coast Amateur Radio Association",
          href: "http://www.islandnet.com/~ve7vic/",
        },
        {
          title: "YLRADIO North Vancouver",
          href: "http://www.ylradio.ca",
        },
      ],
    },
    {
      title: "Manitoba Clubs & Repeaters",
      links: [
        {
          title: "1st Sun Valley Venturers",
          href: "http://www.angelfire.com/mb/sunvalleyventurers/",
        },
        {
          title: "Brandon Amateur Radio Club",
          href: "http://www.mts.net/~tbarrett/",
        },
        {
          title: "Dauphin Amateur Radio Club",
          href: "http://www.mts.net/~ve4stu/",
        },
        {
          title: "Eastman Amateur Radio Club",
          href: "http://www.qsl.net/ve4tg/",
        },
        {
          title: "Manitoba Amateur Radio Museum Inc",
          href: "http://www.mts.net/~dsnydal/austin.html",
        },
        {
          title: "Manitoba Digital Emergency Communications Group",
          href: "http://www.langelaar.net/projects/jnos2/",
        },
        {
          title: "Manitoba Repeater Society Inc. (MRS)",
          href: "http://ve4.net/mrs/",
        },
        {
          title: "Triple S Communications Group",
          href: "http://www.ve4sss.ca/",
        },
        {
          title: "Winnipeg Amateur Radio Club",
          href: "http://www.mts.net/~warc/",
        },
        {
          title: "Winnipeg Senior Citizens Radio Club",
          href: "http://www.mts.net/~ve4wsc/",
        },
      ],
    },
    {
      title: "New Brunswick Clubs & Repeaters",
      links: [
        {
          title: "CLUB RADIO AMATEUR RESTIGOUCHE",
          href: "http://www.members.tripod.com/restigouche/",
        },
        {
          title: "Dalhousie Amateur Radio Club",
          href: "http://personal.nbnet.nb.ca/dmallet/",
        },
        {
          title: "Fredericton Amateur Radio Club",
          href: "http://www3.nbnet.nb.ca/ve9nd/",
        },
        {
          title: "Miramichi Amateur Radio Group",
          href: "http://www.marg.8k.com/",
        },
        {
          title: "The Loyalist City Amateur Radio Club",
          href: "http://www.lcarc.ca/",
        },
        {
          title: "Tri-County Amateur Radio Club",
          href: "http://www.ve9tca.org/",
        },
        {
          title: "University Of New Brunswick ARC",
          href: "http://www.unbf.ca/clubs/ham/",
        },
        {
          title: "WESTCUMB AMATEUR RADIO CLUB",
          href: "http://www.westcumb.com/",
        },
      ],
    },
    {
      title: "Newfoundland Clubs & Repeaters",
      links: [
        {
          title: "AValon Radio Amateur Club",
          href: "http://www.avrac.com/",
        },
        {
          title: "Baccalieu Amateur Radio Klub Inc.",
          href: "http://vo1brk.com/",
        },
        {
          title: "Marconi Radio Club of Newfoundland, Inc.",
          href: "http://www.ucs.mun.ca/~jcraig/mrcn.html",
        },
        {
          title: "GOULDS AMATEUR RADIO CLUB",
          href: "http://www.webspawner.com/users/gouldsclub/",
        },
        {
          title: "Society of Newfoundland Radio Amateurs",
          href: "http://www.sonra.ca/",
        },
        {
          title: "St. Anthony Amateur Radio Association",
          href: "http://welcome.to/SAARA",
        },
      ],
    },
    {
      title: "Nova Scotia Clubs & Repeaters",
      links: [
        {
          title: "ANTIGONISH AMATEUR RADIO CLUB",
          href: "http://www3.ns.sympatico.ca/rbporter/amateur.html",
        },
        {
          title: "Dartmouth Amateur Radio Club",
          href: "http://www.accesswave.ca/~leoadler/darc.html",
        },
        {
          title: "Greenwood Amateur Radio Club",
          href: "http://www.airforce.dnd.ca/14wing/community/clubs6_e.asp",
        },
        {
          title: "Halifax Amateur Radio Club",
          href: "http://www.halifax-arc.org/",
        },
        {
          title: "Kings County ARC",
          href: "http://www.kcarc.ns.ca/",
        },
        {
          title: "Luenburg County ARC",
          href: "http://www.qsl.net/ve1arn/",
        },
        {
          title: "Macaroni Amateur Wireless Society",
          href: "http://www.qsl.net/ve1mrs/index.html",
        },
        {
          title: "Nova Scotia Amateur Radio Association",
          href: "http://users.auracom.com/nsara/",
        },
        {
          title: "Pictou County Amateur Radio Club",
          href: "http://www.sdickson.com/pcarc/",
        },
        {
          title: "QUEENS COUNTY AMATEUR RADIO CLUB",
          href: "http://www.bobturner.ca/qcarc/qcarc.htm",
        },
        {
          title: "TRURO AMATEUR RADIO CLUB",
          href: "http://groups.msn.com/VE1LV/_homepage.msnw",
        },
        {
          title: "Westcum ARC",
          href: "http://www3.ns.sympatico.ca/bickle/index.html",
        },
        {
          title: "Yarmouth ARC",
          href: "http://www.yarmouthweb.com/yarc/",
        },
      ],
    },
    {
      title: "Nunavut Clubs & Repeaters",
      links: [
        {
          title: "Amateur Radio Mini-Expedition",
          href: "http://www.qsl.net/ve3cvg/iqaluit/",
        },
      ],
    },
    {
      title: "Ontario Repeaters & Radio Clubs",
      links: [
        {
          title: "Algoma Amateur Radio Club",
          href: "http://www.qsl.net/algomaarc/index.htm",
        },
        {
          title: "ALGOMA Seniors Electronic Communicators",
          href: "http://members.shaw.ca/VE3SCA/",
        },
        {
          title: "Amherstburg Amateur Radio Club",
          href: "http://amherstburg.hfradio.net/",
        },
        {
          title: "Barrie Amateur Radio Club",
          href: "http://www.barriearc.com/",
        },
        {
          title: "Blue Mountain Radio Club",
          href: "http://www.georgian.net/bmarc/",
        },
        {
          title: "Borden Amateur Radio Klub",
          href: "http://www.geocities.com/ResearchTriangle/Lab/5441/",
        },
        {
          title: "Border City Radio Club",
          href: "http://home.cogeco.ca/~bcrc/",
        },
        { title: "Brantford Amateur Radio Club", href: "http://ve3ba.com/" },
        {
          title: "Brockville Amateur Radio Club",
          href: "http://www.brockville.net/barc/",
        },
        { title: "BURLINGTON AMATEUR RADIO CLUB", href: "http://www.barc.ca/" },
        {
          title: "Canadian Police College Amateur Radio Club",
          href: "http://www.ve3cpc.org/",
        },
        {
          title: "Central Ontario Amateur Radio Club",
          href: "http://www.coarc.on.ca/",
        },
        {
          title: "Collingwood Elective Radio & Teaching School",
          href: "http://www.certs.20m.com/",
        },
        {
          title: "Dryden Amateur Radio Society",
          href: "http://my.drytel.net/va3ext/",
        },
        {
          title: "Festival City Amateur Radio Club",
          href: "http://www.qsl.net/ve3fcg/",
        },
        {
          title: "Georgian Bay Amateur Radio Club",
          href: "http://greynet.net/~gbarc/",
        },
        { title: "Halton Amateur Radio Club", href: "http://www.harc.on.ca/" },
        {
          title: "Hamilton Amateur Radio Club",
          href: "http://www.freenet.hamilton.on.ca/Information/sports/leisure/radio/Index.html",
        },
        {
          title: "Hart House ARC (U of T)",
          href: "http://hharc.sa.utoronto.ca/",
        },
        { title: "Iroquois Amateur Radio Club", href: "http://www.icarc.com/" },
        {
          title: "Kenora Amateur Radio Club",
          href: "http://mywebpage.netscape.com/kenoraradio/",
        },
        {
          title: "Kingston Amateur Radio Club",
          href: "http://www.ve3kbr.com/",
        },
        { title: "Kitchner Waterloo ARC", href: "http://www.kwarc.org/" },
        { title: "Lakehead Amateur Radio Club", href: "http://larclub.net/" },
        {
          title: "Lambton County Radio Club",
          href: "http://www.kcbassociates.com/lcrc/",
        },
        { title: "London Amateur Radio Club", href: "http://www.larc.ca/" },
        {
          title: "Manitoulin Island ARC",
          href: "http://www.manitoulinradio.org/",
        },
        {
          title: "Manotick Amateur Radio Group & VE3RIX",
          href: "http://www.ve3rix.ca/",
        },
        { title: "Mississauga ARC", href: "http://www.marc.on.ca/" },
        {
          title: "NFIDX Association",
          href: "http://www3.sympatico.ca/amitchell/nfidxa/",
        },
        {
          title: "Niagara Peninsula Amateur Radio Club",
          href: "http://nparc.on.ca/www/index.jsp/home",
        },
        {
          title: "North Bay Amateur Radio Club",
          href: "http://nbarc.vianet.ca/",
        },
        {
          title: "North Shore Amateur Radio Club",
          href: "http://www.osha.igs.net/~lsolomon/nsarc/index.htm",
        },
        {
          title: "Northern Ontario Repeaters",
          href: "http://www.igs.net/slvrc/nor_ont.htm",
        },
        { title: "Nortown Amateur Radio Club", href: "http://www.ve3nar.org/" },
        {
          title: "Oakville Amateur Radio Club",
          href: "http://www.oakvilleamateurs.net/",
        },
        { title: "Ontario DX Association", href: "http://www.odxa.on.ca/" },
        {
          title: "Orilla Amateur Radio Club",
          href: "http://www.orilliaarc.ca/",
        },
        { title: "Ottawa Amateur Radio Club", href: "http://www.oarc.net/" },
        {
          title: "Ottawa Valley Mobile Radio Club",
          href: "http://www.ovmrc.on.ca/ve3jw.htm",
        },
        { title: "Peel Amateur Radio Club", href: "http://www.peelarc.org/" },
        { title: "Prince Edward Radio Club", href: "http://perc.lks.net/" },
        {
          title: "QCWA Ottawa Chapter 70",
          href: "http://ca.geocities.com/qcwa70@rogers.com/",
        },
        { title: "QCWA Fred Hammond, Chapter 73", href: "http://www.qcwa.ca/" },
        { title: "Quinte Amateur Radio Club", href: "http://www.qarc.on.ca/" },
        {
          title: "Renfrew County Amateur Radio Club",
          href: "http://www.magma.ca/~glemire/amradio.html",
        },
        {
          title: "RLARC - Rideau Lakes Amateurs",
          href: "http://www.falls.igs.net/~rlarc/rlrcmbrs.htm",
        },
        {
          title: "Saint Lawrence Valley Repeater Club",
          href: "http://www.igs.net/slvrc/",
        },
        {
          title: "Sarnia White Cane Amateur Radio Club",
          href: "http://swc.hfradio.net/",
        },
        {
          title: "Scarborough Amateur Radio Club",
          href: "http://www.ve3we.ca/",
        },
        { title: "SBARA", href: "http://www.qsl.net/sbrag/" },
        { title: "Seaway Valley Amateur Radio Club", href: "http://svarc.ca/" },
        { title: "Skywide ARC", href: "http://www.jproc.ca/sarc/" },
        {
          title: "Southern Ontario Repeater Team",
          href: "http://members.tripod.com/~SORT/",
        },
        {
          title: "South Georgian Bay Amateur Radio Club",
          href: "http://users.csolve.net/~sgbarc/",
        },
        {
          title: "Sun Parlor ARC",
          href: "http://www.angelfire.com/ca/sparcclub/",
        },
        {
          title: "Sun Parlour Retirees ARC VE3WRC",
          href: "http://www.qsl.net/sprarc/",
        },
        {
          title: "South Pickering Amateur Radio Club",
          href: "http://www.ve3spc.homelinux.com/",
        },
        { title: "Sudbury Amateur Radio Club", href: "http://www.ve3srg.com/" },
        {
          title: "Sun Parlour Retirees Amateur Radio Club",
          href: "http://www.qsl.net/sprarc/",
        },
        {
          title: "Thornhill Radio Amateur Club",
          href: "http://www3.sympatico.ca/jrlittle/main.htm",
        },
        {
          title: "Timmins Amateur Radio Club",
          href: "http://www.geocities.com/CapeCanaveral/Hangar/8312/",
        },
        {
          title: "Toronto Amateur Radio Club",
          href: "http://www.platinum1.com/va3ldm/",
        },
      ],
    },
    {
      title: "PEI Clubs & Repeaters",
      links: [
        {
          title: "Charlottetown Amateur Radio Club",
          href: "http://carc.isn.net/",
        },
        {
          title: "Summerside Amateur Radio Club",
          href: "http://www.summersidearc.com/",
        },
        {
          title: "Prince Edward Island Radio Club",
          href: "http://www.lks.net/~perc/index.html",
        },
      ],
    },
    {
      title: "Quebec Clubs & Repeaters",
      links: [
        {
          title: "Association Radio Exprimentale du Sud de Qubec",
          href: "http://www.aresqc.org/",
        },
        {
          title: "Association.des Radio-Amateurs Independants",
          href: "http://www.ve2reh.net/",
        },
        {
          title: "Club de Radio Amateur de Contrecoeur Inc.",
          href: "http://pages.infinit.net/ve2ckc/",
        },
        {
          title: "Club Radio Amateur de Quebec inc (CRAQ)",
          href: "http://www.craq.qc.ca/",
        },
        { title: "Concordia University ARC", href: "" },
        { title: "CRA de Charlevoix", href: "http://www.qsl.net/ve2ccr/" },
        {
          title: "C R A de la Cote-du-Sud",
          href: "http://membres.lycos.fr/va2ccs/",
        },
        {
          title: "CRA de Drummondville",
          href: "http://www.9bit.qc.ca/~ve2crd/index.html",
        },
        { title: "CRA Laval-Laurentides", href: "http://www.ve2crl.qc.ca/" },
        {
          title: "C R A Outaouais",
          href: "http://ve2uqh.uqah.uquebec.ca/index.shtml",
        },
        { title: "C R A de Quebec", href: "http://www.craq.qc.ca/" },
        { title: "CRA Rive-Sud Montreal", href: "http://www.ve2clm.ca/" },
        { title: "C R A Sorel-Tracy", href: "http://www.ve2cbs.qc.ca/" },
        { title: "C R A Sud Ouest", href: "http://www.ve2cev.qc.ca/" },
        { title: "C R A VE2ETS", href: "http://ve2.ele.etsmtl.ca/" },
        {
          title: "Montreal Amateur Radio Club",
          href: "http://www.marc.qc.ca/",
        },
        {
          title: "Police Association Radio Club",
          href: "http://www.ipa.ca/radioclub/index.php",
        },
        {
          title: "Union Metropolitaine des Sans-filistes de Montreal",
          href: "http://www.ve2ums.ca/",
        },
        {
          title: "West Island Amateur Radio Club",
          href: "http://shell.pubnix.net/~wiarc/",
        },
        {
          title: "Western Quebec VHF/UHF ARC",
          href: "http://www.geocities.com/ve2rm/",
        },
      ],
    },
    {
      title: "Saskatchewan Clubs & Repeaters",
      links: [
        {
          title: "Battleford Amateur Radio Club",
          href: "http://ve5brc.amateur-radio.ca/",
        },
        {
          title: "Lakeland Amateur Radio Association",
          href: "http://www.qsl.net/ve5qu/",
        },
        {
          title: "Meewasin Amateur Radio Society, Inc.",
          href: "http://sarl.ca/mars/",
        },
        {
          title: "Moose Jaw Amateur Radio Club",
          href: "http://www.maritek.sasktelwebsite.net/ve5ma/",
        },
        {
          title: "Nipawin Amateur Radio Club",
          href: "http://nipawinarc.netfirms.com/",
        },
        { title: "Northern Amateur Radio Club", href: "http://www.narc.net/" },
        {
          title: "Parkland Amateur Radio Club",
          href: "http://parc.sasktelwebsite.net",
        },
        {
          title: "Regina Amateur Radio Association",
          href: "http://www.ve5nn.ca/",
        },
        {
          title: "Sask-Alta Radio Club",
          href: "http://www.lloydminster.org/sarc/",
        },
        {
          title: "Saskatoon Amateur Radio Club",
          href: "http://ve5aa.dyndns.org/",
        },
        {
          title: "Saskatchewan Amateur Radio League",
          href: "http://www.sarl.ca/",
        },
        {
          title: "Southwest Amateur Radio Club",
          href: "http://www.t2.net/ham_club",
        },
        {
          title: "Unity Amateur Radio Club",
          href: "http://www.geocities.com/SiliconValley/Horizon/4030/",
        },
        {
          title: "Weyburn Amateur Radio Club",
          href: "http://www.code07.com/i/detail/26308/weyburn-amateur-radio-club.html/",
        },
        {
          title: "The Wolseley Amateur Radio Club",
          href: "http://web.mac.com/slatert/Wolseley_Repeater_Group/The_Wolseley_Repeater_Group.html",
        },
        { title: "VE5DGD Website", href: "http://www.cdnhams.ca/" },
        { title: "VE5JL Homepage", href: "http://www.ve5jl.com/" },
        { title: "VE5KC Website", href: "http://ve5kc.ham-radio.ch/" },
      ],
    },
    {
      title: "Yukon Clubs & Repeaters",
      links: [
        {
          title: "Yukon Amateur Radio Association",
          href: "http://www.yara.ca/",
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 px-8 flex flex-col gap-16">
          <section className="flex flex-row gap-8 flex-wrap justify-stretch items-stretch text-center">
            <Accordion
              variant="splitted"
              itemClasses={{
                title: "font-bold md:text-lg text-sm md:text-center text-left",
                subtitle: "md:text-md text-sm md:text-center text-left",
                indicator: "hidden",
                base: "p-0 px-0 w-full m-0",
                heading: "p-0 -mx-2",
                trigger:
                  "data-[hover=true]:bg-neutral-600 bg-neutral-700/50 rounded-lg transition-all duration-300 md:p-8 p-4",
              }}
              defaultExpandedKeys={["Early Beginnings"]}
              className="flex flex-col gap-4"
            >
              {sections.map((section) => (
                <AccordionItem title={section.title} key={section.title}>
                  <section className="flex flex-row lg:gap-8 md:gap-4 gap-2 flex-wrap justify-stretch items-stretch py-8">
                    {section.links.map((link) => (
                      <a
                        href={link.href}
                        key={link.title}
                        className="flex-grow bg-neutral-700 hover:bg-neutral-700/90 rounded-[8px] transition-all duration-500 outline outline-black/0 hover:outline-white ease-in-out hover:scale-[1.02] p-4 lg:px-4 lg:py-3 md:px-3 md:py-2 flex items-center md:justify-center min-w-[250px] text-white  md:text-center text-left text-[0.6rem] md:text-sm"
                      >
                        {link.title}
                      </a>
                    ))}
                  </section>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
    </>
  );
}
