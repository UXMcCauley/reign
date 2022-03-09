import{jsx as _jsx}from"react/jsx-runtime";import*as React from"react";import{useState,useEffect,useRef}from"react";import{addPropertyControls,ControlType,motion,RenderTarget}from"framer";import{NullState}from"https://framer.com/m/framer/icon-nullstate.js@0.7.0";import HouseFactory from"https://framer.com/m/phosphor-icons/House.js@0.0.37";import{defaultEvents,useIconSelection}from"https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js";const iconKeys=["Activity","AddressBook","Airplane","AirplaneInFlight","AirplaneLanding","AirplaneTakeoff","AirplaneTilt","Airplay","Alarm","AlignBottom","AlignCenterVertical","AlignLeft","AlignRight","AlignTop","Anchor","AnchorSimple","AndroidLogo","Aperture","AppWindow","AppleLogo","Archive","ArchiveBox","ArchiveTray","Armchair","ArrowArcLeft","ArrowArcRight","ArrowBendDownLeft","ArrowBendDownRight","ArrowBendLeftDown","ArrowBendLeftUp","ArrowBendRightDown","ArrowBendRightUp","ArrowBendUpLeft","ArrowBendUpRight","ArrowCircleDown","ArrowCircleDownLeft","ArrowCircleDownRight","ArrowCircleLeft","ArrowCircleRight","ArrowCircleUp","ArrowCircleUpLeft","ArrowCircleUpRight","ArrowClockwise","ArrowDown","ArrowDownLeft","ArrowDownRight","ArrowElbowDownLeft","ArrowElbowDownRight","ArrowElbowLeft","ArrowElbowLeftDown","ArrowElbowLeftUp","ArrowElbowRight","ArrowElbowRightDown","ArrowElbowRightUp","ArrowElbowUpLeft","ArrowElbowUpRight","ArrowFatDown","ArrowFatLeft","ArrowFatLineDown","ArrowFatLineLeft","ArrowFatLineRight","ArrowFatLineUp","ArrowFatLinesDown","ArrowFatLinesLeft","ArrowFatLinesRight","ArrowFatLinesUp","ArrowFatRight","ArrowFatUp","ArrowLeft","ArrowLineDown","ArrowLineDownLeft","ArrowLineDownRight","ArrowLineLeft","ArrowLineRight","ArrowLineUp","ArrowLineUpLeft","ArrowLineUpRight","ArrowRight","ArrowSquareDown","ArrowSquareDownLeft","ArrowSquareDownRight","ArrowSquareIn","ArrowSquareLeft","ArrowSquareOut","ArrowSquareRight","ArrowSquareUp","ArrowSquareUpLeft","ArrowSquareUpRight","ArrowUDownLeft","ArrowUDownRight","ArrowULeftDown","ArrowULeftUp","ArrowURightDown","ArrowURightUp","ArrowUUpLeft","ArrowUUpRight","ArrowUp","ArrowUpLeft","ArrowUpRight","ArrowsClockwise","ArrowsDownUp","ArrowsIn","ArrowsInCardinal","ArrowsInLineVertical","ArrowsInSimple","ArrowsLeftRight","ArrowsOut","ArrowsOutCardinal","ArrowsOutSimple","Article","ArticleMedium","ArticleNyTimes","Asterisk","At","Atom","Baby","Backspace","Bag","BagSimple","Bandaids","Bank","Barbell","Barcode","Baseball","Basketball","BatteryCharging","BatteryEmpty","BatteryFull","BatteryHigh","BatteryLow","BatteryMedium","BatteryWarning","Bed","Bell","BellRinging","BellSimple","BellSimpleRinging","BellSimpleSlash","BellSimpleZ","BellSlash","BellZ","Bicycle","Bird","Bluetooth","BluetoothConnected","BluetoothSlash","BluetoothX","Boat","Book","BookBookmark","BookOpen","Bookmark","BookmarkSimple","Bookmarks","BookmarksSimple","Books","BoundingBox","BracketsAngle","BracketsCurly","BracketsRound","BracketsSquare","Brain","Brandy","Briefcase","BriefcaseMetal","Broadcast","Browser","Browsers","Bug","BugBeetle","BugDroid","Buildings","Bus","Cake","Calculator","Calendar","CalendarBlank","CalendarCheck","CalendarPlus","CalendarX","Camera","CameraSlash","Car","CarSimple","Cardholder","Cards","CaretCircleDoubleUp","CaretCircleDown","CaretCircleLeft","CaretCircleRight","CaretCircleUp","CaretDoubleDown","CaretDoubleLeft","CaretDoubleRight","CaretDoubleUp","CaretDown","CaretLeft","CaretRight","CaretUp","Cat","CellSignalFull","CellSignalHigh","CellSignalLow","CellSignalMedium","CellSignalNone","CellSignalSlash","CellSignalX","Chalkboard","ChalkboardSimple","ChalkboardTeacher","ChartBar","ChartBarHorizontal","ChartLine","ChartLineUp","ChartPie","ChartPieSlice","Chat","ChatCentered","ChatCenteredDots","ChatCenteredText","ChatCircle","ChatCircleDots","ChatCircleText","ChatDots","ChatTeardrop","ChatTeardropDots","ChatTeardropText","ChatText","Chats","ChatsCircle","ChatsTeardrop","Check","CheckCircle","CheckSquare","CheckSquareOffset","Checks","Circle","CircleDashed","CircleHalf","CircleHalfTilt","CircleWavy","CircleWavyCheck","CircleWavyQuestion","CircleWavyWarning","CirclesFour","CirclesThree","CirclesThreePlus","Clipboard","ClipboardText","Clock","ClockAfternoon","ClockClockwise","ClosedCaptioning","Cloud","CloudArrowDown","CloudArrowUp","CloudCheck","CloudFog","CloudLightning","CloudMoon","CloudRain","CloudSlash","CloudSnow","CloudSun","Club","Code","CodeSimple","Coffee","Coin","Columns","Command","Compass","ComputerTower","Cookie","CookingPot","Copy","CopySimple","Copyright","CornersIn","CornersOut","Cpu","CreditCard","Crop","Crosshair","CrosshairSimple","Crown","CrownSimple","Cube","CurrencyBtc","CurrencyCircleDollar","CurrencyCny","CurrencyDollar","CurrencyDollarSimple","CurrencyEur","CurrencyGbp","CurrencyInr","CurrencyJpy","CurrencyKrw","CurrencyRub","Cursor","Database","Desktop","DesktopTower","DeviceMobile","DeviceMobileCamera","DeviceMobileSpeaker","DeviceTablet","DeviceTabletCamera","DeviceTabletSpeaker","Diamond","DiceFive","DiceFour","DiceOne","DiceSix","DiceThree","DiceTwo","Disc","DiscordLogo","Divide","Dog","Door","DotsNine","DotsSix","DotsSixVertical","DotsThree","DotsThreeCircle","DotsThreeOutline","DotsThreeVertical","Download","DownloadSimple","DribbbleLogo","Drop","DropHalf","Ear","EarSlash","Eject","EjectSimple","Envelope","EnvelopeOpen","EnvelopeSimple","EnvelopeSimpleOpen","Equals","Eraser","Export","Eye","EyeClosed","EyeSlash","Eyedropper","FaceMask","FacebookLogo","Factory","Faders","FadersHorizontal","FastForward","FastForwardCircle","FigmaLogo","File","FileArrowDown","FileArrowUp","FileDotted","FileMinus","FilePdf","FilePlus","FileSearch","FileText","FileX","Files","FilmStrip","Fingerprint","FingerprintSimple","FinnTheHuman","Fire","FireSimple","FirstAid","FirstAidKit","Fish","FishSimple","Flag","FlagBanner","Flame","Flashlight","Flask","FloppyDisk","FloppyDiskBack","FlowArrow","Flower","FlowerLotus","Folder","FolderMinus","FolderNotch","FolderNotchMinus","FolderNotchOpen","FolderNotchPlus","FolderOpen","FolderPlus","FolderSimple","FolderSimpleMinus","FolderSimplePlus","Folders","Football","ForkKnife","FrameCorners","FramerLogo","Funnel","FunnelSimple","GameController","GasPump","Gauge","Gear","GearSix","GenderFemale","GenderIntersex","GenderMale","GenderNeuter","GenderNonbinary","GenderTransgender","Ghost","Gif","Gift","GitBranch","GitCommit","GitDiff","GitFork","GitMerge","GitPullRequest","GithubLogo","GitlabLogo","GitlabLogoSimple","Globe","GlobeHemisphereEast","GlobeHemisphereWest","GlobeSimple","GlobeStand","GoogleLogo","GooglePlayLogo","GraduationCap","GridFour","Hand","HandFist","HandGrabbing","HandPalm","HandPointing","HandSoap","HandWaving","Handbag","HandbagSimple","HandsClapping","Handshake","HardDrive","HardDrives","Hash","HashStraight","Headlights","Headphones","Headset","Heart","HeartStraight","Heartbeat","Hexagon","HighlighterCircle","Horse","Hourglass","HourglassHigh","HourglassLow","HourglassMedium","HourglassSimple","HourglassSimpleHigh","HourglassSimpleLow","House","HouseLine","HouseSimple","IdentificationBadge","IdentificationCard","Image","ImageSquare","Infinity","Info","InstagramLogo","Intersect","Jeep","Key","KeyReturn","Keyboard","Knife","Lamp","Laptop","Layout","Leaf","Lifebuoy","Lightbulb","LightbulbFilament","Lightning","LightningSlash","LineSegment","LineSegments","Link","LinkBreak","LinkSimple","LinkSimpleBreak","LinkSimpleHorizontal","LinkedinLogo","List","ListBullets","ListDashes","ListNumbers","ListPlus","Lock","LockKey","LockKeyOpen","LockLaminated","LockLaminatedOpen","LockOpen","LockSimple","LockSimpleOpen","MagicWand","Magnet","MagnetStraight","MagnifyingGlass","MagnifyingGlassMinus","MagnifyingGlassPlus","MapPin","MapPinLine","MapTrifold","MarkerCircle","Martini","MathOperations","Medal","MediumLogo","Megaphone","MegaphoneSimple","MessengerLogo","Microphone","MicrophoneSlash","Minus","MinusCircle","Money","Monitor","MonitorPlay","Moon","MoonStars","Mouse","MouseSimple","MusicNote","MusicNoteSimple","MusicNotes","MusicNotesSimple","NavigationArrow","Newspaper","NewspaperClipping","Note","NoteBlank","NotePencil","Notebook","Notepad","Notification","NumberCircleEight","NumberCircleFive","NumberCircleFour","NumberCircleNine","NumberCircleOne","NumberCircleSeven","NumberCircleSix","NumberCircleThree","NumberCircleTwo","NumberCircleZero","NumberEight","NumberFive","NumberFour","NumberNine","NumberOne","NumberSeven","NumberSix","NumberSquareEight","NumberSquareFive","NumberSquareFour","NumberSquareNine","NumberSquareOne","NumberSquareSeven","NumberSquareSix","NumberSquareThree","NumberSquareTwo","NumberSquareZero","NumberThree","NumberTwo","NumberZero","Nut","NyTimesLogo","Octagon","Package","PaintBrush","PaintBrushBroad","PaintBrushHousehold","PaintBucket","PaintRoller","Palette","PaperPlane","PaperPlaneRight","PaperPlaneTilt","Paperclip","PaperclipHorizontal","Path","Pause","PauseCircle","PawPrint","Peace","Pen","PenNib","PenNibStraight","Pencil","PencilCircle","PencilLine","PencilSimple","Percent","Person","PersonSimple","PersonSimpleRun","PersonSimpleWalk","Phone","PhoneCall","PhoneDisconnect","PhoneIncoming","PhoneOutgoing","PhoneSlash","PhoneX","PhosphorLogo","PictureInPicture","Pill","PinterestLogo","Pizza","Placeholder","Planet","Play","PlayCircle","Playlist","Plus","PlusCircle","PlusMinus","PokerChip","Polygon","Power","Prescription","Presentation","PresentationChart","Printer","Prohibit","ProhibitInset","ProjectorScreen","ProjectorScreenChart","PushPin","PushPinSimple","PushPinSimpleSlash","PushPinSlash","PuzzlePiece","QrCode","Question","Queue","Quotes","Radical","Radio","Rainbow","RainbowCloud","Receipt","Record","Rectangle","Recycle","RedditLogo","Repeat","RepeatOnce","Rewind","RewindCircle","Robot","Rocket","RocketLaunch","Rows","Rss","RssSimple","Ruler","Scales","Scissors","Screencast","ScribbleLoop","Selection","SelectionAll","SelectionBackground","SelectionForeground","SelectionInverse","SelectionPlus","SelectionSlash","Share","ShareNetwork","Shield","ShieldCheck","ShieldCheckered","ShieldChevron","ShieldPlus","ShieldSlash","ShieldWarning","ShoppingBag","ShoppingBagOpen","ShoppingCart","ShoppingCartSimple","Shower","Shuffle","ShuffleAngular","ShuffleSimple","SignIn","SignOut","SimCard","SketchLogo","SkipBack","SkipBackCircle","SkipForward","SkipForwardCircle","SlackLogo","Sliders","SlidersHorizontal","Smiley","SmileyBlank","SmileyMeh","SmileyNervous","SmileySad","SmileySticker","SmileyWink","SmileyXEyes","SnapchatLogo","Snowflake","SoccerBall","SortAscending","SortDescending","Spade","Sparkle","SpeakerHigh","SpeakerLow","SpeakerNone","SpeakerSimpleHigh","SpeakerSimpleLow","SpeakerSimpleNone","SpeakerSimpleSlash","SpeakerSimpleX","SpeakerSlash","SpeakerX","Spinner","SpinnerGap","SpotifyLogo","Square","SquareHalf","SquareLogo","SquaresFour","Stack","StackSimple","Star","StarFour","StarHalf","Sticker","Stop","StopCircle","Storefront","StripeLogo","Student","Suitcase","SuitcaseSimple","Sun","SunDim","SunHorizon","Swap","Swatches","Sword","TShirt","Table","Tag","TagChevron","TagSimple","Target","TelegramLogo","Television","TelevisionSimple","TennisBall","Terminal","TerminalWindow","TestTube","TextAa","TextAlignCenter","TextAlignJustify","TextAlignLeft","TextAlignRight","TextBolder","TextH","TextHFive","TextHFour","TextHOne","TextHSix","TextHThree","TextHTwo","TextItalic","TextStrikethrough","TextT","TextUnderline","Thermometer","ThermometerCold","ThermometerHot","ThermometerSimple","ThumbsDown","ThumbsUp","Ticket","TiktokLogo","Timer","ToggleLeft","ToggleRight","ToiletPaper","Tote","ToteSimple","TrafficSign","Train","TrainRegional","TrainSimple","Translate","Trash","TrashSimple","Tray","Tree","TreeEvergreen","TreeStructure","TrendDown","TrendUp","Triangle","Trophy","Truck","TwitchLogo","TwitterLogo","Umbrella","UmbrellaSimple","Upload","UploadSimple","User","UserCircle","UserCircleGear","UserCircleMinus","UserCirclePlus","UserFocus","UserGear","UserList","UserMinus","UserPlus","UserRectangle","UserSquare","Users","UsersFour","UsersThree","Vibrate","VideoCamera","VideoCameraSlash","Voicemail","Volleyball","Wall","Wallet","Warning","WarningCircle","WarningOctagon","Watch","Waves","WhatsappLogo","Wheelchair","WifiHigh","WifiLow","WifiMedium","WifiNone","WifiSlash","WifiX","Wind","WindowsLogo","Wine","Wrench","X","XCircle","XSquare","YoutubeLogo",];const moduleBaseUrl="https://framer.com/m/phosphor-icons/";const weightOptions=["thin","light","regular","bold","fill","duotone",];const lowercaseIconKeyPairs=iconKeys.reduce((res,key)=>{res[key.toLowerCase()]=key;return res;},{});/**
 * PHOSPHOR
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 *
 * @framerIntrinsicWidth 24
 * @framerIntrinsicHeight 24
 */ export function Icon(props){const{color,selectByList,iconSearch,iconSelection,onClick,onMouseDown,onMouseUp,onMouseEnter,onMouseLeave,weight,mirrored}=props;const isMounted=useRef(false);const iconKey=useIconSelection(iconKeys,selectByList,iconSearch,iconSelection,lowercaseIconKeyPairs);const[SelectedIcon,setSelectedIcon]=useState(iconKey==="Home"?HouseFactory(React):null);async function importModule(){// Get the selected module
try{const iconModuleUrl=`${moduleBaseUrl}${iconKey}.js@0.0.37`;const module=await import(/* webpackIgnore: true */ iconModuleUrl);if(isMounted.current)setSelectedIcon(module.default(React));}catch(err){if(isMounted.current)setSelectedIcon(null);}}useEffect(()=>{isMounted.current=true;importModule();return()=>{isMounted.current=false;};},[iconKey]);const isOnCanvas=RenderTarget.current()===RenderTarget.canvas;const emptyState=isOnCanvas?/*#__PURE__*/ _jsx(NullState,{}):null;return(/*#__PURE__*/ _jsx(motion.div,{style:{display:"contents"},onClick,onMouseEnter,onMouseLeave,onMouseDown,onMouseUp,children:SelectedIcon?/*#__PURE__*/ _jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",style:{userSelect:"none",width:"100%",height:"100%",display:"inline-block",fill:color,flexShrink:0,transform:mirrored?"scale(-1, 1)":undefined},focusable:"false",color:color,children:/*#__PURE__*/ _jsx(SelectedIcon,{color:color,weight:weight})}):emptyState}));}Icon.displayName="Phosphor";Icon.defaultProps={width:24,height:24,iconSelection:"House",iconSearch:"House",color:"#66F",selectByList:true,weight:"regular",mirrored:false};addPropertyControls(Icon,{selectByList:{type:ControlType.Boolean,title:"Select",enabledTitle:"List",disabledTitle:"Search",defaultValue:Icon.defaultProps.selectByList},iconSelection:{type:ControlType.Enum,options:iconKeys,defaultValue:Icon.defaultProps.iconSelection,title:"Name",hidden:({selectByList})=>!selectByList,description:"Find every icon name on the [Phosphor site](https://phosphoricons.com/)"},iconSearch:{type:ControlType.String,title:"Name",placeholder:"Menu, Wifi, Box…",hidden:({selectByList})=>selectByList},color:{type:ControlType.Color,title:"Color",defaultValue:Icon.defaultProps.color},weight:{type:ControlType.Enum,title:"Weight",optionTitles:weightOptions.map(piece=>piece.charAt(0).toUpperCase()+piece.slice(1)),options:weightOptions,defaultValue:Icon.defaultProps.weight},mirrored:{type:ControlType.Boolean,enabledTitle:"Yes",disabledTitle:"No",defaultValue:Icon.defaultProps.mirrored},...defaultEvents});
export const __FramerMetadata__ = {"exports":{"Icon":{"type":"reactComponent","name":"Icon","slots":[],"annotations":{"framerSupportedLayoutHeight":"fixed","framerSupportedLayoutWidth":"fixed","framerIntrinsicHeight":"24","framerContractVersion":"1","framerIntrinsicWidth":"24"}},"IconProps":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}