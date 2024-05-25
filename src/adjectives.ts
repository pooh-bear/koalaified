const adjectives: string[] = ["absorbent",
"accomplished",
"accurate",
"adaptable",
"adept",
"advanced",
"adventurous",
"affectionate",
"agricultural",
"alert",
"alien",
"alternative",
"altruistic",
"amateur",
"ambitious",
"amiable",
"ancient",
"angry",
"animated",
"antique",
"antisocial",
"apathetic",
"apolitical",
"approved",
"arrogant",
"artistic",
"assertive",
"attentive",
"atypical",
"authentic",
"authoritarian",
"authorized",
"autonomous",
"avant-garde",
"average",
"aware",
"basic",
"benevolent",
"big",
"binding",
"blissful",
"blurry",
"bohemian",
"bold",
"bored",
"brave",
"bright",
"brilliant",
"brutal",
"buoyant",
"calm",
"careless",
"caring",
"cautious",
"centralized",
"certified",
"charitable",
"cheerful",
"cheery",
"chic",
"chivalrous",
"cinematic",
"classic",
"classy",
"clean",
"clear",
"clever",
"cloudy",
"clueless",
"cold-hearted",
"cold",
"colonial",
"colorful",
"commercial",
"common",
"compassionate",
"competent",
"complex",
"complicated",
"confident",
"conscientious",
"conservative",
"considerate",
"constitutional",
"contemporary",
"content",
"conventional",
"cool",
"cordial",
"cosmopolitan",
"counterfeit",
"courageous",
"courteous",
"cowardly",
"creative",
"crude",
"cultural",
"curious",
"daring",
"dark",
"decentralized",
"decisive",
"deep",
"dejected",
"delicate",
"democratic",
"dependent",
"despondent",
"determined",
"dictatorial",
"diligent",
"dim",
"dirty",
"disapproved",
"discontent",
"discourteous",
"disheartened",
"dishonest",
"disloyal",
"dismal",
"disorganized",
"disrespectful",
"distant",
"distinctive",
"distracted",
"domestic",
"dominant",
"dominated",
"dowdy",
"downcast",
"downtrodden",
"drab",
"drained",
"dramatic",
"dreary",
"driven",
"drowsy",
"dry",
"dull",
"dynamic",
"eager",
"early",
"eccentric",
"economic",
"ecstatic",
"educational",
"egocentric",
"elaborate",
"elated",
"elegant",
"emancipated",
"empty",
"endorsed",
"energetic",
"energized",
"enslaved",
"enthused",
"enthusiastic",
"ethnic",
"euphoric",
"exacting",
"exceptional",
"excited",
"executive",
"exhausted",
"experienced",
"expert",
"expressive",
"extraordinary",
"extroverted",
"exuberant",
"fabled",
"factual",
"faded",
"fake",
"false",
"fashionable",
"fast",
"fatigued",
"fearful",
"federal",
"fictional",
"financial",
"flashy",
"flexible",
"focused",
"follower",
"foolish",
"forbidden",
"foreign",
"forgiving",
"forlorn",
"fragile",
"fraudulent",
"free",
"friendly",
"frumpy",
"full",
"futuristic",
"gallant",
"garish",
"gaudy",
"generous",
"gentle",
"genuine",
"gifted",
"gleeful",
"global",
"gloomy",
"glossy",
"glowing",
"governmental",
"gracious",
"grateful",
"greedy",
"green",
"gregarious",
"haphazard",
"happy-go-lucky",
"happy",
"hard-hearted",
"hard",
"harsh",
"hateful",
"heavy",
"heavyhearted",
"helpful",
"helpless",
"high",
"historic",
"honest",
"hopeful",
"hopeless",
"hostile",
"hot",
"huge",
"humane",
"humble",
"idealistic",
"ill-mannered",
"illegal",
"illogical",
"imaginary",
"imitative",
"impatient",
"impolite",
"impractical",
"impressive",
"inaccurate",
"inattentive",
"incompetent",
"inconsiderate",
"indecisive",
"independent",
"indifferent",
"indigenous",
"industrial",
"inept",
"inexperienced",
"inexpressive",
"inflexible",
"ingenious",
"inhumane",
"innovative",
"insecure",
"insensitive",
"insightful",
"international",
"intolerant",
"intricate",
"introverted",
"invalid",
"inventive",
"invigorated",
"irrational",
"joyful",
"joyous",
"jubilant",
"judicial",
"keen",
"kind-hearted",
"kind",
"lackluster",
"late",
"lawful",
"lazy",
"leaderly",
"legal",
"legendary",
"legislative",
"legitimate",
"lenient",
"lethargic",
"liberal",
"liberated",
"licensed",
"lifeless",
"light",
"lighthearted",
"limited",
"listless",
"literary",
"local",
"logical",
"long",
"loud",
"loving",
"low",
"loyal",
"lugubrious",
"luminous",
"magnanimous",
"mainstream",
"malevolent",
"matte",
"mean",
"mediocre",
"melancholic",
"methodical",
"meticulous",
"mild",
"minimalist",
"misanthropic",
"miserable",
"misunderstanding",
"modern",
"modernistic",
"modest",
"modish",
"monarchical",
"monetary",
"monochrome",
"moody",
"multicultural",
"multitalented",
"mundane",
"musical",
"mysterious",
"mythical",
"narrow",
"national",
"native",
"needy",
"neglectful",
"nervous",
"new",
"nonbinding",
"nongovernmental",
"nonpartisan",
"notable",
"novel",
"novice",
"nullified",
"objective",
"oblivious",
"obscure",
"official",
"old",
"one-dimensional",
"opaque",
"oppressed",
"optimistic",
"ordinary",
"organized",
"original",
"ornate",
"orthodox",
"outdated",
"outgoing",
"outmoded",
"parliamentary",
"partisan",
"passionate",
"passive",
"patient",
"perceptive",
"perfectionist",
"performing",
"permissible",
"persevering",
"persistent",
"pessimistic",
"petty",
"philanthropic",
"plain",
"playful",
"polished",
"polite",
"political",
"poor",
"posh",
"practical",
"pristine",
"proactive",
"professional",
"proficient",
"progressive",
"prohibited",
"proud",
"provincial",
"qualified",
"quick",
"quiet",
"quitting",
"racial",
"radiant",
"radical",
"ratified",
"rational",
"reactionary",
"reactive",
"real",
"realistic",
"reclusive",
"recognized",
"refined",
"reflective",
"refreshed",
"regional",
"registered",
"regressive",
"rejuvenated",
"reliable",
"reluctant",
"remarkable",
"republican",
"resilient",
"resourceful",
"respectful",
"retro",
"revitalized",
"revolutionary",
"rich",
"rigid",
"rough",
"roughened",
"rude",
"rudimentary",
"run-of-the-mill",
"rustic",
"sad",
"sanctioned",
"scientific",
"scrupulous",
"seasoned",
"self-reliant",
"selfish",
"selfless",
"senseless",
"sensible",
"sensitive",
"serious",
"severe",
"shabby",
"shadowy",
"shallow",
"shiny",
"short",
"shy",
"simple",
"skilled",
"sloppy",
"slow",
"small",
"smooth",
"sociable",
"social",
"soft",
"sophisticated",
"sorrowful",
"sovereign",
"sparkling",
"spectacular",
"spent",
"spirited",
"spiritless",
"standout",
"static",
"stimulated",
"stingy",
"stringent",
"strong",
"stupid",
"sturdy",
"stylish",
"subdued",
"subjective",
"submissive",
"subordinate",
"successful",
"sunny",
"superficial",
"sympathetic",
"systematic",
"tacky",
"tainted",
"talented",
"technological",
"tenacious",
"tender",
"theatrical",
"thick-skinned",
"thick",
"thin",
"thorough",
"thoughtful",
"thoughtless",
"thrilled",
"timid",
"tiny",
"tolerant",
"totalitarian",
"touchy",
"tough",
"traditional",
"transparent",
"trendy",
"true",
"trustworthy",
"typical",
"unaccomplished",
"unambitious",
"unapproachable",
"unartistic",
"unauthorized",
"unaware",
"uncertified",
"uncommon",
"unconstitutional",
"unconventional",
"uncreative",
"understanding",
"understated",
"unenthusiastic",
"unfeeling",
"unforgiving",
"unfriendly",
"ungentlemanly",
"ungifted",
"ungracious",
"ungrateful",
"unhelpful",
"unimaginative",
"unimpressive",
"unique",
"unitary",
"universal",
"unlawful",
"unlicensed",
"unmotivated",
"unobservant",
"unofficial",
"unprofessional",
"unproficient",
"unqualified",
"unrecognized",
"unregistered",
"unreliable",
"unremarkable",
"unresourceful",
"unsanctioned",
"unscrupulous",
"unskilled",
"unstimulated",
"unsuccessful",
"unsympathetic",
"unsystematic",
"untalented",
"untrustworthy",
"unwatchful",
"uplifted",
"urban",
"valid",
"versatile",
"veteran",
"vibrant",
"vigilant",
"vigorous",
"vintage",
"visual",
"vivid",
"warm-hearted",
"warm",
"watchful",
"weak",
"weary",
"well-mannered",
"wet",
"wide",
"wise",
"woeful",
"worldwide",
"yielding",
"young",
"zealous",
"zesty"];

export default adjectives;