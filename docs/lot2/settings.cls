%----------------------------------------------------------------------------------------
%	DÉFINITION DE CLASSES
%----------------------------------------------------------------------------------------

\NeedsTeXFormat{LaTeX2e}[1996/12/01]
\newcommand{\classname}{Settings}
\providecommand{\baseclass}{book}
\RequirePackage{etoolbox}
\RequirePackage{xparse}
\newbool{nolistspace}
\newbool{chapteroneline}
\newbool{listtoc}
\newbool{toctoc}
\newbool{parskip}
\newbool{hyperrefsupport}
\booltrue{hyperrefsupport}
\newbool{headsepline}
\newbool{consistentlayout}

\DeclareOption{nohyperref}{\boolfalse{hyperrefsupport}}
\DeclareOption{nolistspacing}{\booltrue{nolistspace}}
\DeclareOption{liststotoc}{\booltrue{listtoc}}
\DeclareOption{chapterinoneline}{\booltrue{chapteroneline}}
\DeclareOption{toctotoc}{\booltrue{toctoc}}
\DeclareOption{parskip}{\booltrue{parskip}}
\DeclareOption{headsepline}{\booltrue{headsepline}}
\DeclareOption{consistentlayout}{\booltrue{consistentlayout}}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{\baseclass}}

\ProcessOptions\relax

\LoadClass{\baseclass}

\ProvideDocumentCommand{\abovechapterskip}{}{\vspace*{20pt}}
\ProvideDocumentCommand{\chapterbelowskip}{}{\vspace*{40pt}}
\ProvideDocumentCommand{\chapterinbetweenskip}{}{\vspace*{20pt}}
\ProvideDocumentCommand{\autodot}{}{}
\ProvideDocumentCommand{\mdtChapapp}{}{}
\ProvideDocumentCommand{\chapteralign}{}{\raggedright}
\ProvideDocumentCommand{\chapterfont}{}{\Huge\bfseries}
\ProvideDocumentCommand{\chapterprefixfont}{}{\LARGE\bfseries}
\DeclareDocumentCommand{\@makechapterhead}{ m }{
	\abovechapterskip
	{\parindent \z@ \chapteralign \normalfont
		\ifnum \c@secnumdepth >\m@ne
		\if@mainmatter
		\ifbool{chapteroneline}{
			\chapterfont \mdtChapapp\thechapter\autodot\enspace
		}{
			\chapterprefixfont \@chapapp\space \thechapter
			\par\nobreak
			\chapterinbetweenskip
		}
		\fi
		\fi
		\interlinepenalty\@M
		\chapterfont #1\par\nobreak
		\chapterbelowskip
	}
	\thispagestyle{\chapter@p@gestyle}
}
\def\@makeschapterhead#1{
	\abovechapterskip
	{\parindent \z@ \chapteralign
		\normalfont
		\interlinepenalty\@M
		\chapterfont  #1\par\nobreak
		\chapterbelowskip
	}
	\thispagestyle{\chapter@p@gestyle}
}


\ProvideDocumentCommand{\addchap}{ s o m }{
	\chapter*{#3}
	\markboth{}{}
	\IfBooleanTF{#1}{
	}{
		\IfNoValueTF{#2}{
			\addchaptertocentry{#3}
			\markboth{\MakeMarkcase{#3}}{\MakeMarkcase{#3}}
		}{
			\addchaptertocentry{#2}
			\markboth{\MakeMarkcase{#2}}{\MakeMarkcase{#2}}
		}
	}
}

\ProvideDocumentCommand{\addsec}{ s o m }{
	\section*{#3}
	\markright{}
	\IfBooleanTF{#1}{
	}{
		\IfNoValueTF{#2}{
			\addcontentsline{toc}{section}{#3}
			\markright{\MakeMarkcase{#3}}
		}{
			\addcontentsline{toc}{section}{#2}
			\markright{\MakeMarkcase{#2}}
		}
	}
}

%----------------------------------------------------------------------------------------
%	OPTIONS DE CLASSE
%----------------------------------------------------------------------------------------

\ifbool{parskip}{\RequirePackage{parskip}}


\ifbool{listtoc}{
	\patchcmd{\listoftables}{\@starttoc{lot}}{
		\addchaptertocentry{\listtablename}\@starttoc{lot}
	}{}{}
	\patchcmd{\listoffigures}{\@starttoc{lof}}{
		\addchaptertocentry{\listfigurename}\@starttoc{lof}
	}{}{}
}

\ifbool{toctoc}{
	\patchcmd{\tableofcontents}{\@starttoc{toc}
}{
	\addchaptertocentry{\contentsname}\@starttoc{toc}}{}{}
}

\patchcmd{\tableofcontents}{\MakeUppercase}{\MakeMarkcase}{}{}
\patchcmd{\tableofcontents}{\MakeUppercase}{\MakeMarkcase}{}{}
\patchcmd{\listoffigures}{\MakeUppercase}{\MakeMarkcase}{}{}
\patchcmd{\listoffigures}{\MakeUppercase}{\MakeMarkcase}{}{}
\patchcmd{\listoftables}{\MakeUppercase}{\MakeMarkcase}{}{}
\patchcmd{\listoftables}{\MakeUppercase}{\MakeMarkcase}{}{}

\ifbool{nolistspace}{
	\patchcmd{\listoffigures}{
		\@starttoc{lof}
	}{
		\begingroup%
		\singlespace\@starttoc{lof}\endgroup
	}{}{}
	\patchcmd{\listoftables}{
		\@starttoc{lot}
	}{
		\begingroup
		\singlespace\@starttoc{lot}\endgroup
	}{}{}
	\patchcmd{\tableofcontents}{
		\@starttoc{toc}
	}{
		\begingroup%
		\singlespace\@starttoc{toc}\endgroup
	}{}{}
}{}


%----------------------------------------------------------------------------------------
%	PAQUETS
%----------------------------------------------------------------------------------------

\RequirePackage{babel}
\RequirePackage{scrbase} 
\RequirePackage{scrhack} 
\RequirePackage{setspace} 
\RequirePackage{longtable}
\RequirePackage{siunitx} 
\RequirePackage{graphicx}
\graphicspath{{Figures/}{./}}
\RequirePackage{booktabs}
\RequirePackage{caption}
\captionsetup{justification=centerlast,font=small,labelfont=sc,margin=50pt}
\usepackage{hyperref}
\usepackage{xcolor}


%----------------------------------------------------------------------------------------
%	COMMANDES CUSTOMS
%----------------------------------------------------------------------------------------

\definecolor{palette1}{RGB}{24,24,24}
\definecolor{palette2}{RGB}{244,26,27}
\definecolor{palette3}{RGB}{227,215,202}
\definecolor{palette4}{RGB}{21,74,64}
\definecolor{palette5}{RGB}{147,25,29}


\NewDocumentCommand{\thesistitle} { o m }{
 \IfValueTF{#1}{\def\shorttitle{#1}}{\def\shorttitle{#2}}
 \def\@title{#2}
 \def\ttitle{#2}
}
\DeclareDocumentCommand{\author}{m}{\newcommand{\authorname}{#1}\renewcommand{\@author}{#1}}
\NewDocumentCommand{\supervisor}{m}{\newcommand{\supname}{#1}}
\NewDocumentCommand{\examiner}{m}{\newcommand{\examname}{#1}}
\NewDocumentCommand{\degree}{m}{\newcommand{\degreename}{#1}}
\NewDocumentCommand{\addresses}{m}{\newcommand{\addressname}{#1}}
\NewDocumentCommand{\university}{m}{\newcommand{\univname}{#1}}
\NewDocumentCommand{\department}{m}{\newcommand{\deptname}{#1}}
\NewDocumentCommand{\group}{m}{\newcommand{\groupname}{#1}}
\NewDocumentCommand{\faculty}{m}{\newcommand{\facname}{#1}}
\NewDocumentCommand{\subject}{m}{\newcommand{\subjectname}{#1}}
\NewDocumentCommand{\keywords}{m}{\newcommand{\keywordnames}{#1}}

\newcommand{\checktoopen}{
	\if@openright\cleardoublepage\else\clearpage\fi
	\ifdef{\phantomsection}{\phantomsection}{}
}

\NewDocumentCommand{\bhrule}{}{\typeout{--------------------}}
\NewDocumentCommand{\tttypeout}{m}{\bhrule\typeout{\space #1}\bhrule}
\newcommand{\HRule}{\rule{.9\linewidth}{.6pt}}
\newcommand{\decoRule}{\rule{.8\textwidth}{.4pt}}

\setcounter{tocdepth}{3}
\ProvideDocumentCommand{\addchaptertocentry}{ m }{
	\addcontentsline{toc}{chapter}{#1}
}

%----------------------------------------------------------------------------------------
%	COULEURS
%----------------------------------------------------------------------------------------

\usepackage{xcolor} 

\colorlet{mdtRed}{red!50!black}

%----------------------------------------------------------------------------------------
%	MARGES
%----------------------------------------------------------------------------------------

\RequirePackage{geometry}
\geometry{
	headheight=4ex,
	includehead,
	includefoot
}

\raggedbottom

%----------------------------------------------------------------------------------------
%	PÉNALITÉS
%----------------------------------------------------------------------------------------

\doublehyphendemerits=10000
\brokenpenalty=10000
\widowpenalty=9999 
\clubpenalty=9999
\interfootnotelinepenalty=9999

%----------------------------------------------------------------------------------------
%	HEADERS ET FOOTERS
%----------------------------------------------------------------------------------------

\RequirePackage[markcase=used]{scrlayer-scrpage}
\providepairofpagestyles{thesisSimple}{
	\clearpairofpagestyles
	\automark[chapter]{chapter}
	\ihead{\headmark}
	\ohead[\pagemark]{\pagemark}
}
\ifoot{}
\ofoot{}
\pagestyle{thesisSimple}
\providepairofpagestyles[thesisSimple]{thesis}{
	\automark*[section]{}
}
\providepairofpagestyles[thesisSimple]{review}{
	\ofoot[\shorttitle/\authorname]{\shorttitle/\authorname}
	\ifoot[\today]{\today}
}
\pagestyle{thesis}
\ifbool{headsepline}{\KOMAoption{headsepline}{true}}{}
\PreventPackageFromLoading[\ClassError{\classname}{Package `fancyhdr' is
incompatible\MessageBreak with this class}{The pagesyles are defined 
	using package `scrlayer-scrpage', please consult the\MessageBreak 
KOMA-script documentation for details.}]{fancyhdr}

\usepackage[pagestyles]{titlesec}
\titleformat{\chapter}[display]{\normalfont\bfseries}{}{-100pt}{\Huge}
\newpagestyle{mystyle}
{\sethead[\thepage][][\chaptertitle]{}{}{\thepage}}
\pagestyle{mystyle}

\newcommand{\blank@p@gestyle}{empty}
\newcommand{\chapter@p@gestyle}{plain}
\NewDocumentCommand{\blankpagestyle}{ m }{
	\ClassWarning{\classname}{\string\blankpagestyle\space is
	obsolete,\MessageBreak use \string\setblankpagestyle \space  instead}\renewcommand{\blank@p@gestyle}{}{#1}
}
\NewDocumentCommand{\setblankpagestyle}{ m }{\renewcommand{\blank@p@gestyle}{#1}}
\NewDocumentCommand{\setchapterpagestyle}{ m }{\renewcommand{\chapter@p@gestyle}{#1}}

\DeclareDocumentCommand\cleardoublepage{}{\clearpage\if@twoside \ifodd\c@page\else
	\hbox{}
	\thispagestyle{\blank@p@gestyle}
	\newpage
	\if@twocolumn\hbox{}\newpage\fi\fi\fi
}

%----------------------------------------------------------------------------------------
%	ABBREVIATIONS PAGE DESIGN
%----------------------------------------------------------------------------------------

\newcommand{\abbrevname}{List of Abbreviations}
\providecaptionname{english,british,american}{\abbrevname}{List of Abbreviations}
\providecaptionname{ngerman,german,austrian,naustrian}{\abbrevname}{Abk\"urzungsverzeichnis}
\NewDocumentEnvironment{abbreviations}{ m }{
	\ifbool{nolistspace}{\begingroup\singlespacing}{}
	\ifbool{listtoc}{\addchap{\abbrevname}}{\addchap*{\abbrevname}}
	\begin{longtable}{#1}
	}{%
	\end{longtable}
	\addtocounter{table}{-1}
	\ifbool{nolistspace}{\endgroup}{}
}

%----------------------------------------------------------------------------------------
%	ABSTRACT PAGE DESIGN
%----------------------------------------------------------------------------------------

\DeclareDocumentCommand{\abstractauthorfont}{}{}
\DeclareDocumentCommand{\abstracttitlefont}{}{}
\newcommand{\byname}{by}
\newcommand{\abstractname}{Abstract}
\providecaptionname{german,ngerman,austrian,naustrian}{\byname}{von}
\providecaptionname{american,australian,british,canadian,english,newzealand,UKenglish,USenglish}{\byname}{by}
\ifbool{consistentlayout}{
	\DeclareDocumentEnvironment{abstract}{ O{} }{
		\addchap*{\abstractname}
		{\chapteralign\normalsize\abstractauthorfont \authorname \par}
		\vspace{\baselineskip}
		{\chapteralign\parbox{.7\linewidth}{\chapteralign\normalsize\itshape\abstracttitlefont\@title}\par} 
		\bigskip\noindent\ignorespaces
	}
	{}
}{
	\DeclareDocumentEnvironment{abstract}{ O{\null\vfill} }{
		\checktoopen
		\tttypeout{\abstractname}
		#1
		\thispagestyle{plain}
		\begin{center}
			{\normalsize \MakeUppercase{\univname} \par}
			\bigskip
			{\huge\textit{\abstractname} \par}
			\bigskip
			{\normalsize \deptname \par}
			\bigskip
			{\normalsize\bfseries \@title \par}
			\medskip
			{\normalsize \byname{} \authorname \par}
			\bigskip
		\end{center}
	}
	{
		\vfill\null
	}
}

\DeclareDocumentEnvironment{extraAbstract}{ O{\null\vfill} }{
	\checktoopen
	\tttypeout{\abstractname}
	#1
	\thispagestyle{empty}
	\begin{center}
		{\normalsize \MakeUppercase{\univname} \par}
		\bigskip
		{\huge\textit{\abstractname} \par}
		\bigskip
		{\normalsize \facname \par}
		{\normalsize \deptname \par}
		\bigskip
		{\normalsize \degreename\par}
		\bigskip
		{\normalsize\bfseries \@title \par}
		\medskip
		{\normalsize \byname{} \authorname \par}
		\bigskip
	\end{center}
}
{
	\vfill\null
}

%----------------------------------------------------------------------------------------

\ifbool{hyperrefsupport}{
\AtEndPreamble{\RequirePackage{hyperref}
\hypersetup{pdfpagemode={UseOutlines},
bookmarksopen=true,
bookmarksopenlevel=0,
hypertexnames=false,
colorlinks=true,
citecolor=blue,
linkcolor=blue,
urlcolor=mdtRed,
pdfstartview={FitV},
unicode,
breaklinks=true,
}

\pdfstringdefDisableCommands{
	\let\\\space
}
	}
}{
}

%----------------------------------------------------------------------------------------

\endinput

