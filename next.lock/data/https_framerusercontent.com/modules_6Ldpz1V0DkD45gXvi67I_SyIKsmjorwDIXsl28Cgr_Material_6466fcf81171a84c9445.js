import{jsx as _jsx}from"react/jsx-runtime";import*as React from"react";import{useState,useEffect,useMemo,useRef}from"react";import{addPropertyControls,ControlType,motion,RenderTarget}from"framer";import{NullState}from"https://framer.com/m/framer/icon-nullstate.js@0.7.0";import HomeFactory from"https://framer.com/m/material-icons/Home.js@0.0.32";import{defaultEvents,useIconSelection,getIconSelection}from"https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js";const moduleBaseUrl="https://framer.com/m/material-icons/";const icons={AcUnit:15,AccessAlarm:15,AccessAlarms:15,AccessTime:15,AccessTimeFilled:0,Accessibility:7,AccessibilityNew:0,Accessible:15,AccessibleForward:0,AccountBalance:2,AccountBalanceWallet:0,AccountBox:15,AccountCircle:7,AccountTree:15,AdUnits:15,Adb:15,Add:15,AddAPhoto:15,AddAlarm:15,AddAlert:15,AddBox:15,AddBusiness:15,AddCircle:15,AddCircleOutline:0,AddComment:15,AddIcCall:15,AddLink:15,AddLocation:15,AddLocationAlt:2,AddModerator:15,AddPhotoAlternate:0,AddReaction:15,AddRoad:15,AddShoppingCart:2,AddTask:15,AddToDrive:15,AddToHomeScreen:2,AddToPhotos:15,AddToQueue:15,Addchart:15,Adjust:15,AdminPanelSettings:0,Agriculture:15,Air:15,AirlineSeatFlat:2,AirplaneTicket:2,AirplanemodeActive:0,AirplanemodeInactive:0,Airplay:15,AirportShuttle:2,Alarm:15,AlarmAdd:15,AlarmOff:15,AlarmOn:15,Album:15,AlignHorizontalLeft:0,AlignHorizontalRight:0,AlignVerticalBottom:0,AlignVerticalCenter:0,AlignVerticalTop:0,AllInbox:15,AllInclusive:15,AllOut:15,AltRoute:15,AlternateEmail:2,Analytics:15,Anchor:15,Android:15,Animation:15,Announcement:15,Aod:15,Apartment:15,Api:15,AppBlocking:15,AppRegistration:2,AppSettingsAlt:2,Apple:0,Approval:15,Apps:15,Architecture:15,Archive:15,ArrowBack:15,ArrowBackIos:15,ArrowBackIosNew:2,ArrowCircleDown:2,ArrowCircleUp:7,ArrowDownward:7,ArrowDropDown:7,ArrowDropDownCircle:0,ArrowDropUp:15,ArrowForward:15,ArrowForwardIos:2,ArrowLeft:15,ArrowRight:15,ArrowRightAlt:7,ArrowUpward:15,ArtTrack:15,Article:15,AspectRatio:15,Assessment:15,Assignment:15,AssignmentInd:7,AssignmentLate:2,AssignmentReturn:0,AssignmentReturned:0,AssignmentTurnedIn:0,Assistant:15,AssistantDirection:0,AssistantPhoto:2,Atm:15,AttachEmail:15,AttachFile:15,AttachMoney:15,Attachment:15,Attractions:15,Attribution:15,Audiotrack:15,AutoAwesome:15,AutoAwesomeMosaic:0,AutoAwesomeMotion:0,AutoDelete:15,AutoFixHigh:15,AutoFixNormal:7,AutoFixOff:15,AutoGraph:15,AutoStories:15,AutofpsSelect:7,Autorenew:15,AvTimer:15,BabyChangingStation:0,Backpack:15,Backspace:15,Backup:15,BackupTable:15,Badge:15,BakeryDining:15,Balcony:15,Ballot:15,BarChart:15,BatchPrediction:2,Bathroom:15,Bathtub:15,Battery20:15,Battery30:15,Battery50:15,Battery60:15,Battery80:15,Battery90:15,BatteryAlert:15,BatteryCharging20:0,BatteryCharging30:0,BatteryCharging50:0,BatteryCharging60:0,BatteryCharging80:0,BatteryCharging90:0,BatteryChargingFull:0,BatteryFull:15,BatterySaver:15,BatteryStd:15,BatteryUnknown:2,BeachAccess:15,Bed:15,BedroomBaby:15,BedroomChild:15,BedroomParent:7,Bedtime:15,Beenhere:15,Bento:15,BikeScooter:15,Biotech:15,Blender:15,Block:15,Bloodtype:15,Bluetooth:15,BluetoothAudio:2,BluetoothConnected:0,BluetoothDisabled:0,BluetoothDrive:2,BluetoothSearching:0,BlurCircular:15,BlurLinear:15,BlurOff:15,BlurOn:15,Bolt:15,Book:15,BookOnline:15,Bookmark:15,BookmarkAdd:15,BookmarkAdded:7,BookmarkBorder:2,BookmarkRemove:2,Bookmarks:15,BorderAll:15,BorderBottom:15,BorderClear:15,BorderColor:15,BorderHorizontal:0,BorderInner:15,BorderLeft:15,BorderOuter:15,BorderRight:15,BorderStyle:15,BorderTop:15,BorderVertical:2,BrandingWatermark:0,BreakfastDining:2,Brightness1:15,Brightness2:15,Brightness3:15,Brightness4:15,Brightness5:15,Brightness6:15,Brightness7:15,BrightnessAuto:2,BrightnessHigh:2,BrightnessLow:7,BrightnessMedium:0,BrokenImage:15,BrowserNotSupported:0,BrunchDining:15,Brush:15,BubbleChart:15,BugReport:15,Build:15,BuildCircle:15,Bungalow:15,BurstMode:15,BusAlert:15,Business:15,BusinessCenter:2,Cabin:15,Cable:15,Cached:15,Cake:15,Calculate:15,CalendarToday:7,CalendarViewDay:2,CalendarViewMonth:0,CalendarViewWeek:0,Call:15,CallEnd:15,CallMade:15,CallMerge:15,CallMissed:15,CallMissedOutgoing:0,CallReceived:15,CallSplit:15,CallToAction:15,Camera:15,CameraAlt:15,CameraEnhance:7,CameraFront:15,CameraIndoor:15,CameraOutdoor:7,CameraRear:15,CameraRoll:15,Cameraswitch:15,Campaign:15,Cancel:15,CancelPresentation:0,CancelScheduleSend:0,CarRental:15,CarRepair:15,CardGiftcard:15,CardMembership:2,CardTravel:15,Carpenter:15,Cases:15,Casino:15,Cast:15,CastConnected:7,CastForEducation:0,CatchingPokemon:2,Category:15,Celebration:15,CellWifi:15,CenterFocusStrong:0,CenterFocusWeak:2,Chair:15,ChairAlt:15,Chalet:15,ChangeCircle:15,ChangeHistory:7,ChargingStation:2,Chat:15,ChatBubble:15,ChatBubbleOutline:0,Check:15,CheckBox:15,CheckBoxOutlineBlank:0,CheckCircle:15,CheckCircleOutline:0,Checkroom:15,ChevronLeft:15,ChevronRight:15,ChildCare:15,ChildFriendly:7,ChromeReaderMode:0,Circle:15,CircleNotifications:0,Class:15,CleanHands:15,CleaningServices:0,Clear:15,ClearAll:15,Close:15,CloseFullscreen:2,ClosedCaption:7,ClosedCaptionOff:0,Cloud:15,CloudCircle:15,CloudDone:15,CloudDownload:7,CloudOff:15,CloudQueue:15,CloudUpload:15,Code:15,CodeOff:15,Coffee:15,CoffeeMaker:15,Collections:15,CollectionsBookmark:0,ColorLens:15,Colorize:15,Comment:15,CommentBank:15,Commute:15,Compare:15,CompareArrows:7,CompassCalibration:0,Compress:15,Computer:15,ConfirmationNumber:0,ConnectedTv:15,Construction:15,ContactMail:15,ContactPage:15,ContactPhone:15,ContactSupport:2,Contactless:15,Contacts:15,ContentCopy:15,ContentCut:15,ContentPaste:15,ContentPasteOff:2,ControlCamera:7,ControlPoint:15,CopyAll:15,Copyright:15,Coronavirus:15,CorporateFare:7,Cottage:15,Countertops:15,Create:15,CreateNewFolder:2,CreditCard:15,CreditCardOff:7,CreditScore:15,Crib:15,Crop:15,Crop169:15,Crop32:15,Crop54:15,Crop75:15,CropDin:15,CropFree:15,CropLandscape:7,CropOriginal:15,CropPortrait:15,CropRotate:15,CropSquare:15,Dangerous:15,DarkMode:15,Dashboard:15,DashboardCustomize:0,DataSaverOff:15,DataSaverOn:15,DataUsage:15,DateRange:15,Deck:15,Dehaze:15,Delete:15,DeleteForever:7,DeleteOutline:7,DeleteSweep:15,DeliveryDining:2,DepartureBoard:2,Description:15,DesignServices:2,DesktopMac:15,DesktopWindows:2,Details:15,DeveloperBoard:2,DeveloperBoardOff:0,DeveloperMode:7,DeviceHub:15,DeviceThermostat:0,DeviceUnknown:7,Devices:15,DevicesOther:15,DialerSip:15,Dialpad:15,Dining:15,DinnerDining:15,Directions:15,DirectionsBike:2,DirectionsBoat:2,DirectionsBoatFilled:0,DirectionsBus:7,DirectionsBusFilled:0,DirectionsCar:7,DirectionsCarFilled:0,DirectionsOff:7,DirectionsRailway:0,DirectionsRun:7,DirectionsSubway:0,DirectionsTransit:0,DirectionsWalk:2,DirtyLens:15,DisabledByDefault:0,DiscFull:15,Dns:15,DoDisturb:15,DoDisturbAlt:15,DoDisturbOff:15,DoDisturbOn:15,DoNotDisturb:15,DoNotDisturbAlt:2,DoNotDisturbOff:2,DoNotDisturbOn:2,DoNotStep:15,DoNotTouch:15,Dock:15,DocumentScanner:2,Domain:15,DomainDisabled:2,DomainVerification:0,Done:15,DoneAll:15,DoneOutline:15,DonutLarge:15,DonutSmall:15,DoorBack:15,DoorFront:15,DoorSliding:15,Doorbell:15,DoubleArrow:15,DownhillSkiing:2,Download:15,DownloadDone:15,DownloadForOffline:0,Downloading:15,Drafts:15,DragHandle:15,DragIndicator:7,DriveEta:15,DriveFileMove:7,DriveFolderUpload:0,Dry:15,DryCleaning:15,Duo:15,Dvr:15,DynamicFeed:15,DynamicForm:15,EMobiledata:15,Earbuds:15,EarbudsBattery:2,East:15,Eco:15,EdgesensorHigh:2,EdgesensorLow:7,Edit:15,EditAttributes:2,EditLocation:15,EditLocationAlt:2,EditNotifications:0,EditOff:15,EditRoad:15,EightK:15,EightKPlus:15,EightMp:15,EightteenMp:15,Eject:15,Elderly:15,ElectricBike:15,ElectricCar:15,ElectricMoped:7,ElectricRickshaw:0,ElectricScooter:2,ElectricalServices:0,Elevator:15,ElevenMp:15,Email:15,EmojiEmotions:7,EmojiEvents:15,EmojiFlags:15,EmojiFoodBeverage:0,EmojiNature:15,EmojiObjects:15,EmojiPeople:15,EmojiSymbols:15,EmojiTransportation:0,Engineering:15,EnhancedEncryption:0,Equalizer:15,Error:15,ErrorOutline:15,Escalator:15,EscalatorWarning:0,Euro:15,EuroSymbol:15,EvStation:15,Event:15,EventAvailable:2,EventBusy:15,EventNote:15,EventSeat:15,ExitToApp:15,Expand:15,ExpandLess:15,ExpandMore:15,Explicit:15,Explore:15,ExploreOff:15,Exposure:15,Extension:15,ExtensionOff:15,Face:15,FaceRetouchingOff:0,Facebook:15,FactCheck:15,FamilyRestroom:2,FastForward:15,FastRewind:15,Fastfood:15,Favorite:15,FavoriteBorder:2,FeaturedPlayList:0,FeaturedVideo:7,Feed:15,Feedback:15,Female:15,Fence:15,Festival:15,FiberDvr:15,FiberManualRecord:0,FiberNew:15,FiberPin:15,FiberSmartRecord:0,FileCopy:15,FileDownload:15,FileDownloadDone:0,FileDownloadOff:2,FilePresent:15,FileUpload:15,Filter:15,Filter1:15,Filter2:15,Filter3:15,Filter4:15,Filter5:15,Filter6:15,Filter7:15,Filter8:15,Filter9:15,Filter9Plus:15,FilterAlt:15,FilterBAndW:15,FilterCenterFocus:0,FilterDrama:15,FilterFrames:15,FilterHdr:15,FilterList:15,FilterNone:15,FilterTiltShift:2,FilterVintage:7,FindInPage:15,FindReplace:15,Fingerprint:15,FireExtinguisher:0,Fireplace:15,FirstPage:15,FitScreen:15,FitnessCenter:7,FiveG:15,FiveK:15,FiveKPlus:15,FiveMp:15,FivteenMp:15,Flag:15,Flaky:15,Flare:15,FlashAuto:15,FlashOff:15,FlashOn:15,FlashlightOff:7,FlashlightOn:15,Flatware:15,Flight:15,FlightLand:15,FlightTakeoff:7,Flip:15,FlipCameraAndroid:0,FlipCameraIos:7,FlipToBack:15,FlipToFront:15,Flourescent:15,FlutterDash:15,FmdBad:15,FmdGood:15,Folder:15,FolderOpen:15,FolderShared:15,FolderSpecial:7,FollowTheSigns:2,FontDownload:15,FontDownloadOff:2,FoodBank:15,FormatAlignCenter:0,FormatAlignJustify:0,FormatAlignLeft:2,FormatAlignRight:0,FormatBold:15,FormatClear:15,FormatColorFill:2,FormatColorReset:0,FormatColorText:2,FormatIndentDecrease:0,FormatIndentIncrease:0,FormatItalic:15,FormatLineSpacing:0,FormatListBulleted:0,FormatListNumbered:0,FormatPaint:15,FormatQuote:15,FormatShapes:15,FormatSize:15,FormatStrikethrough:0,FormatUnderlined:0,Forum:15,Forward:15,Forward10:15,Forward30:15,Forward5:15,ForwardToInbox:2,Foundation:15,FourGMobiledata:2,FourGPlusMobiledata:0,FourK:15,FourKPlus:15,FourMp:15,FourteenMp:15,FreeBreakfast:7,Fullscreen:15,FullscreenExit:2,Functions:15,GMobiledata:15,GTranslate:15,Gamepad:15,Games:15,Garage:15,Gavel:15,Gesture:15,GetApp:15,Gif:15,GitHub:0,Gite:15,GolfCourse:15,Google:0,GppBad:15,GppGood:15,GppMaybe:15,GpsFixed:15,GpsNotFixed:15,GpsOff:15,Grade:15,Gradient:15,Grading:15,Grain:15,GraphicEq:15,Grass:15,Grid3x3:15,Grid4x4:15,GridGoldenratio:2,GridOff:15,GridOn:15,GridView:15,Group:15,GroupAdd:15,GroupWork:15,Groups:15,HMobiledata:15,HPlusMobiledata:2,Hail:15,Handyman:15,Hardware:15,Hd:15,HdrAuto:15,HdrAutoSelect:7,HdrEnhancedSelect:0,HdrOff:15,HdrOffSelect:15,HdrOn:15,HdrOnSelect:15,HdrPlus:15,HdrStrong:15,HdrWeak:15,Headphones:15,HeadphonesBattery:0,Headset:15,HeadsetMic:15,HeadsetOff:15,Healing:15,HealthAndSafety:2,Hearing:15,HearingDisabled:2,Height:15,Help:15,HelpCenter:15,HelpOutline:15,Hevc:15,HideImage:15,HideSource:15,HighQuality:15,Highlight:15,HighlightAlt:15,HighlightOff:15,Hiking:15,History:15,HistoryEdu:15,HistoryToggleOff:0,HolidayVillage:2,Home:15,HomeMax:15,HomeMini:15,HomeRepairService:0,HomeWork:15,HorizontalRule:2,HorizontalSplit:2,HotTub:15,Hotel:15,HourglassBottom:2,HourglassDisabled:0,HourglassEmpty:2,HourglassFull:7,HourglassTop:15,House:15,HouseSiding:15,Houseboat:15,HowToReg:15,HowToVote:15,Http:15,Https:15,Hvac:15,IceSkating:15,Icecream:15,Image:15,ImageAspectRatio:0,ImageNotSupported:0,ImageSearch:15,ImagesearchRoller:0,ImportContacts:2,ImportExport:15,ImportantDevices:0,Inbox:15,Info:15,Input:15,InsertChart:15,InsertComment:7,InsertDriveFile:2,InsertEmoticon:2,InsertInvitation:0,InsertLink:15,InsertPhoto:15,Insights:15,Instagram:0,Inventory:15,Inventory2:15,InvertColors:15,InvertColorsOff:2,IosShare:15,Iron:15,Iso:15,Kayaking:15,Keyboard:15,KeyboardAlt:15,KeyboardArrowDown:0,KeyboardArrowLeft:0,KeyboardArrowRight:0,KeyboardArrowUp:2,KeyboardBackspace:0,KeyboardCapslock:0,KeyboardHide:15,KeyboardReturn:2,KeyboardTab:15,KeyboardVoice:7,KingBed:15,Kitchen:15,Kitesurfing:15,Label:15,LabelImportant:2,LabelOff:15,Landscape:15,Language:15,Laptop:15,LaptopChromebook:0,LaptopMac:15,LaptopWindows:7,LastPage:15,Launch:15,Layers:15,LayersClear:15,Leaderboard:15,LeakAdd:15,LeakRemove:15,LegendToggle:15,Lens:15,LensBlur:15,LibraryAdd:15,LibraryAddCheck:2,LibraryBooks:15,LibraryMusic:15,Light:15,LightMode:15,Lightbulb:15,LineStyle:15,LineWeight:15,LinearScale:15,Link:15,LinkOff:15,LinkedCamera:15,LinkedIn:0,Liquor:15,List:15,ListAlt:15,LiveHelp:15,LiveTv:15,Living:15,LocalActivity:7,LocalAirport:15,LocalAtm:15,LocalBar:15,LocalCafe:15,LocalCarWash:15,LocalDining:15,LocalDrink:15,LocalFireDepartment:0,LocalFlorist:15,LocalGasStation:2,LocalGroceryStore:0,LocalHospital:7,LocalHotel:15,LocalLaundryService:0,LocalLibrary:15,LocalMall:15,LocalMovies:15,LocalOffer:15,LocalParking:15,LocalPharmacy:7,LocalPhone:15,LocalPizza:15,LocalPlay:15,LocalPolice:15,LocalPostOffice:2,LocalPrintshop:2,LocalSee:15,LocalShipping:7,LocalTaxi:15,LocationCity:15,LocationDisabled:0,LocationOff:15,LocationOn:15,LocationSearching:0,Lock:15,LockClock:15,LockOpen:15,Login:15,Logout:15,Looks:15,Looks3:15,Looks4:15,Looks5:15,Looks6:15,LooksOne:15,LooksTwo:15,Loop:15,Loupe:15,LowPriority:15,Loyalty:15,LteMobiledata:7,LtePlusMobiledata:0,Luggage:15,LunchDining:15,Mail:15,MailOutline:15,Male:15,ManageAccounts:2,ManageSearch:15,Map:15,MapsHomeWork:15,MapsUgc:15,Margin:15,MarkAsUnread:15,MarkChatRead:15,MarkChatUnread:2,MarkEmailRead:7,MarkEmailUnread:2,Markunread:15,MarkunreadMailbox:0,Masks:15,Maximize:15,MediaBluetoothOff:0,MediaBluetoothOn:0,Mediation:15,MedicalServices:2,Medication:15,MeetingRoom:15,Memory:15,Menu:15,MenuBook:15,MenuOpen:15,MergeType:15,Message:15,Mic:15,MicExternalOff:2,MicExternalOn:7,MicNone:15,MicOff:15,Microwave:15,MilitaryTech:15,Minimize:15,MissedVideoCall:2,Mms:15,MobileFriendly:2,MobileOff:15,MobileScreenShare:0,MobiledataOff:7,Mode:15,ModeComment:15,ModeEdit:15,ModeEditOutline:2,ModeNight:15,ModeStandby:15,ModelTraining:7,MonetizationOn:2,Money:15,MoneyOff:15,MoneyOffCsred:7,Monitor:15,MonitorWeight:7,MonochromePhotos:0,Mood:15,MoodBad:15,Moped:15,More:15,MoreHoriz:15,MoreTime:15,MoreVert:15,MotionPhotosAuto:0,MotionPhotosOff:2,Mouse:15,MoveToInbox:15,Movie:15,MovieCreation:7,MovieFilter:15,Moving:15,Mp:15,MultilineChart:2,MultipleStop:15,Museum:15,MusicNote:15,MusicOff:15,MusicVideo:15,MyLocation:15,Nat:15,Nature:15,NaturePeople:15,NavigateBefore:2,NavigateNext:15,Navigation:15,NearMe:15,NearMeDisabled:2,NearbyError:15,NearbyOff:15,NetworkCell:15,NetworkCheck:15,NetworkLocked:7,NetworkWifi:15,NewReleases:15,NextPlan:15,NextWeek:15,Nfc:15,NightShelter:15,Nightlife:15,Nightlight:15,NightlightRound:2,NightsStay:15,NineK:15,NineKPlus:15,NineMp:15,NineteenMp:15,NoAccounts:15,NoBackpack:15,NoCell:15,NoDrinks:15,NoEncryption:15,NoFlash:15,NoFood:15,NoLuggage:15,NoMeals:15,NoMeetingRoom:7,NoPhotography:7,NoSim:15,NoStroller:15,NoTransfer:15,NordicWalking:7,North:15,NorthEast:15,NorthWest:15,NotAccessible:7,NotInterested:7,NotListedLocation:0,NotStarted:15,Note:15,NoteAdd:15,NoteAlt:15,Notes:15,NotificationAdd:2,Notifications:7,NotificationsActive:0,NotificationsNone:0,NotificationsOff:0,NotificationsPaused:0,OfflineBolt:15,OfflinePin:15,OfflineShare:15,OndemandVideo:7,OneK:15,OneKPlus:15,OneKk:15,OnlinePrediction:0,Opacity:15,OpenInBrowser:7,OpenInFull:15,OpenInNew:15,OpenInNewOff:15,OpenWith:15,OtherHouses:15,Outbound:15,Outbox:15,OutdoorGrill:15,Outlet:15,Padding:15,Pages:15,Pageview:15,Paid:15,Palette:15,PanTool:15,Panorama:15,PanoramaFishEye:2,PanoramaHorizontal:0,PanoramaPhotosphere:0,PanoramaVertical:0,PanoramaWideAngle:0,Paragliding:15,Park:15,PartyMode:15,Password:15,Pattern:15,Pause:15,PauseCircle:15,PauseCircleFilled:0,PauseCircleOutline:0,PausePresentation:0,Payment:15,Payments:15,PedalBike:15,Pending:15,PendingActions:2,People:15,PeopleAlt:15,PeopleOutline:7,PermCameraMic:7,PermContactCalendar:0,PermDataSetting:2,PermIdentity:15,PermMedia:15,PermPhoneMsg:15,PermScanWifi:15,Person:15,PersonAdd:15,PersonAddAlt:15,PersonAddAlt1:7,PersonAddDisabled:0,PersonOff:15,PersonOutline:7,PersonPin:15,PersonPinCircle:2,PersonRemove:15,PersonRemoveAlt1:0,PersonSearch:15,PersonalVideo:7,PestControl:15,PestControlRodent:0,Pets:15,Phone:15,PhoneAndroid:15,PhoneCallback:7,PhoneDisabled:7,PhoneEnabled:15,PhoneForwarded:2,PhoneInTalk:15,PhoneIphone:15,PhoneLocked:15,PhoneMissed:15,PhonePaused:15,Phonelink:15,PhonelinkErase:2,PhonelinkLock:7,PhonelinkOff:15,PhonelinkRing:7,PhonelinkSetup:2,Photo:15,PhotoAlbum:15,PhotoCamera:15,PhotoCameraBack:2,PhotoCameraFront:0,PhotoFilter:15,PhotoLibrary:15,PhotoSizeSelectLarge:0,PhotoSizeSelectSmall:0,Piano:15,PianoOff:15,PictureAsPdf:15,PictureInPicture:0,PictureInPictureAlt:0,PieChart:15,PieChartOutline:2,Pin:15,PinDrop:15,Pinterest:0,PivotTableChart:2,Place:15,Plagiarism:15,PlayArrow:15,PlayCircle:15,PlayCircleFilled:0,PlayCircleOutline:0,PlayDisabled:15,PlayForWork:15,PlayLesson:15,PlaylistAdd:15,PlaylistAddCheck:0,PlaylistPlay:15,Plumbing:15,PlusOne:15,Podcasts:15,PointOfSale:15,Policy:15,Poll:15,Pool:15,PortableWifiOff:2,Portrait:15,PostAdd:15,Power:15,PowerInput:15,PowerOff:15,PowerSettingsNew:0,PregnantWoman:7,PresentToAll:15,Preview:15,PriceChange:15,PriceCheck:15,Print:15,PrintDisabled:7,PriorityHigh:15,PrivacyTip:15,Psychology:15,Public:15,PublicOff:15,Publish:15,PublishedWithChanges:0,PushPin:15,QrCode:15,QrCode2:15,QrCodeScanner:7,QueryBuilder:15,QueryStats:15,QuestionAnswer:2,Queue:15,QueueMusic:15,QueuePlayNext:7,Quickreply:15,Quiz:15,RMobiledata:15,Radar:15,Radio:15,RadioButtonChecked:0,RadioButtonUnchecked:0,RailwayAlert:15,RamenDining:15,RateReview:15,RawOff:15,RawOn:15,ReadMore:15,Receipt:15,ReceiptLong:15,RecentActors:15,Recommend:15,RecordVoiceOver:2,Reddit:0,Redeem:15,Redo:15,ReduceCapacity:2,Refresh:15,RememberMe:15,Remove:15,RemoveCircle:15,RemoveCircleOutline:0,RemoveDone:15,RemoveFromQueue:2,RemoveModerator:2,RemoveRedEye:15,RemoveShoppingCart:0,Reorder:15,Repeat:15,RepeatOn:15,RepeatOne:15,RepeatOneOn:15,Replay:15,Replay10:15,Replay30:15,Replay5:15,ReplayCircleFilled:0,Reply:15,ReplyAll:15,Report:15,ReportGmailerrorred:0,ReportOff:15,ReportProblem:7,RequestPage:15,RequestQuote:15,ResetTv:15,RestartAlt:15,Restaurant:15,RestaurantMenu:2,Restore:15,RestoreFromTrash:0,RestorePage:15,Reviews:15,RiceBowl:15,RingVolume:15,Roofing:15,Room:15,RoomPreferences:2,RoomService:15,Rotate90DegreesCcw:0,RotateLeft:15,RotateRight:15,Router:15,Rowing:15,RssFeed:15,Rsvp:15,Rtt:15,Rule:15,RuleFolder:15,RunCircle:15,RunningWithErrors:0,RvHookup:15,SafetyDivider:7,Sailing:15,Sanitizer:15,Satellite:15,Save:15,SaveAlt:15,SavedSearch:15,Savings:15,Scanner:15,ScatterPlot:15,Schedule:15,ScheduleSend:15,Schema:15,School:15,Science:15,Score:15,ScreenLockLandscape:0,ScreenLockPortrait:0,ScreenLockRotation:0,ScreenRotation:2,ScreenSearchDesktop:0,ScreenShare:15,Screenshot:15,Sd:15,SdCard:15,SdCardAlert:15,SdStorage:15,Search:15,SearchOff:15,Security:15,SecurityUpdate:2,SecurityUpdateGood:0,Segment:15,SelectAll:15,SelfImprovement:2,Sell:15,Send:15,SendAndArchive:2,SendToMobile:15,SensorDoor:15,SensorWindow:15,Sensors:15,SensorsOff:15,SentimentNeutral:0,SentimentSatisfied:0,SetMeal:15,Settings:15,SettingsApplications:0,SettingsBluetooth:0,SettingsBrightness:0,SettingsCell:15,SettingsEthernet:0,SettingsInputAntenna:0,SettingsInputHdmi:0,SettingsInputSvideo:0,SettingsOverscan:0,SettingsPhone:7,SettingsPower:7,SettingsRemote:2,SettingsSuggest:2,SettingsVoice:7,SevenK:15,SevenKPlus:15,SevenMp:15,SeventeenMp:15,Share:15,ShareLocation:7,Shield:15,Shop:15,Shop2:15,ShopTwo:15,ShoppingBag:15,ShoppingBasket:2,ShoppingCart:15,ShortText:15,Shortcut:15,ShowChart:15,Shower:15,Shuffle:15,ShuffleOn:15,ShutterSpeed:15,Sick:15,SignalCellular0Bar:0,SignalCellular1Bar:0,SignalCellular2Bar:0,SignalCellular3Bar:0,SignalCellular4Bar:0,SignalCellularAlt:0,SignalCellularNoSim:0,SignalCellularNodata:0,SignalCellularNull:0,SignalCellularOff:0,SignalWifi0Bar:2,SignalWifi1Bar:2,SignalWifi1BarLock:0,SignalWifi2Bar:2,SignalWifi2BarLock:0,SignalWifi3Bar:2,SignalWifi3BarLock:0,SignalWifi4Bar:2,SignalWifi4BarLock:0,SignalWifiBad:7,SignalWifiOff:7,SimCard:15,SimCardAlert:15,SimCardDownload:2,SingleBed:15,Sip:15,SixK:15,SixKPlus:15,SixMp:15,SixteenMp:15,SixtyFps:15,SixtyFpsSelect:2,Skateboarding:7,SkipNext:15,SkipPrevious:15,Sledding:15,Slideshow:15,SlowMotionVideo:2,SmartButton:15,SmartDisplay:15,SmartScreen:15,SmartToy:15,Smartphone:15,SmokeFree:15,SmokingRooms:15,Sms:15,SmsFailed:15,SnippetFolder:7,Snooze:15,Snowboarding:15,Snowmobile:15,Snowshoeing:15,Soap:15,SocialDistance:2,Sort:15,SortByAlpha:15,Source:15,South:15,SouthEast:15,SouthWest:15,Spa:15,SpaceBar:15,Speaker:15,SpeakerGroup:15,SpeakerNotes:15,SpeakerNotesOff:2,SpeakerPhone:15,Speed:15,Spellcheck:15,Splitscreen:15,Sports:15,SportsBar:15,SportsBaseball:2,SportsBasketball:0,SportsCricket:7,SportsEsports:7,SportsFootball:2,SportsGolf:15,SportsHandball:2,SportsHockey:15,SportsKabaddi:7,SportsMma:15,SportsMotorsports:0,SportsRugby:15,SportsScore:15,SportsSoccer:15,SportsTennis:15,SportsVolleyball:0,SquareFoot:15,StackedBarChart:2,StackedLineChart:0,Stairs:15,Star:15,StarBorder:15,StarBorderPurple500:0,StarHalf:15,StarOutline:15,StarPurple500:7,StarRate:15,Stars:15,StayCurrentLandscape:0,StayCurrentPortrait:0,StayPrimaryLandscape:0,StayPrimaryPortrait:0,StickyNote2:15,Stop:15,StopCircle:15,StopScreenShare:2,Storage:15,Store:15,StoreMallDirectory:0,Storefront:15,Storm:15,Straighten:15,Stream:15,Streetview:15,StrikethroughS:2,Stroller:15,Style:15,Subject:15,Subscript:15,Subscriptions:7,Subtitles:15,SubtitlesOff:15,Subway:15,Summarize:15,Superscript:15,SupervisedUserCircle:0,SupervisorAccount:0,Support:15,SupportAgent:15,Surfing:15,SurroundSound:7,SwapCalls:15,SwapHoriz:15,SwapHorizontalCircle:0,SwapVert:15,SwapVerticalCircle:0,Swipe:15,SwitchAccount:7,SwitchCamera:15,SwitchLeft:15,SwitchRight:15,SwitchVideo:15,Sync:15,SyncAlt:15,SyncDisabled:15,SyncProblem:15,SystemSecurityUpdate:0,SystemUpdate:15,SystemUpdateAlt:2,Tab:15,TabUnselected:7,TableChart:15,TableRows:15,TableView:15,Tablet:15,TabletAndroid:7,TabletMac:15,Tag:15,TagFaces:15,TakeoutDining:7,TapAndPlay:15,Tapas:15,Task:15,TaskAlt:15,TaxiAlert:15,Telegram:0,TenMp:15,Terrain:15,TextFields:15,TextFormat:15,TextRotateUp:15,TextRotateVertical:0,TextRotationAngleup:0,TextRotationDown:0,TextRotationNone:0,TextSnippet:15,Textsms:15,Texture:15,TheaterComedy:7,Theaters:15,Thermostat:15,ThermostatAuto:2,ThirteenMp:15,ThirtyFps:15,ThirtyFpsSelect:2,ThreeDRotation:2,ThreeGMobiledata:0,ThreeK:15,ThreeKPlus:15,ThreeMp:15,ThreeP:15,ThreeSixty:15,ThumbDown:15,ThumbDownAlt:15,ThumbDownOffAlt:2,ThumbUp:15,ThumbUpAlt:15,ThumbUpOffAlt:7,ThumbsUpDown:15,TimeToLeave:15,Timelapse:15,Timeline:15,Timer:15,Timer10:15,Timer10Select:7,Timer3:15,Timer3Select:15,TimerOff:15,TimesOneMobiledata:0,Title:15,Toc:15,Today:15,ToggleOff:15,ToggleOn:15,Toll:15,Tonality:15,Topic:15,TouchApp:15,Tour:15,Toys:15,TrackChanges:15,Traffic:15,Train:15,Tram:15,Transform:15,Transgender:15,TransitEnterexit:0,Translate:15,TravelExplore:7,TrendingDown:15,TrendingFlat:15,TrendingUp:15,TripOrigin:15,Try:15,Tty:15,Tune:15,Tungsten:15,TurnedIn:15,TurnedInNot:15,Tv:15,TvOff:15,TwelveMp:15,TwentyFourMp:15,TwentyOneMp:15,TwentyThreeMp:7,TwentyTwoMp:15,TwentyZeroMp:15,Twitter:0,TwoK:15,TwoKPlus:15,TwoMp:15,TwoWheeler:15,Umbrella:15,Unarchive:15,Undo:15,UnfoldLess:15,UnfoldMore:15,Unpublished:15,Unsubscribe:15,Upcoming:15,Update:15,UpdateDisabled:2,Upgrade:15,Upload:15,UploadFile:15,Usb:15,UsbOff:15,Verified:15,VerifiedUser:15,VerticalAlignBottom:0,VerticalAlignCenter:0,VerticalAlignTop:0,VerticalSplit:7,Vibration:15,VideoCall:15,VideoCameraBack:2,VideoCameraFront:0,VideoLabel:15,VideoLibrary:15,VideoSettings:7,VideoStable:15,Videocam:15,VideocamOff:15,VideogameAsset:2,VideogameAssetOff:0,ViewAgenda:15,ViewArray:15,ViewCarousel:15,ViewColumn:15,ViewComfy:15,ViewCompact:15,ViewDay:15,ViewHeadline:15,ViewInAr:15,ViewList:15,ViewModule:15,ViewQuilt:15,ViewSidebar:15,ViewStream:15,ViewWeek:15,Vignette:15,Villa:15,Visibility:15,VisibilityOff:7,VoiceChat:15,VoiceOverOff:15,Voicemail:15,VolumeDown:15,VolumeMute:15,VolumeOff:15,VolumeUp:15,VolunteerActivism:0,VpnKey:15,VpnLock:15,Vrpano:15,Wallpaper:15,Warning:15,WarningAmber:15,Wash:15,Watch:15,WatchLater:15,Water:15,WaterDamage:15,WaterfallChart:2,Waves:15,WbAuto:15,WbCloudy:15,WbIncandescent:2,WbIridescent:15,WbShade:15,WbSunny:15,WbTwilight:15,Wc:15,Web:15,WebAsset:15,WebAssetOff:15,Weekend:15,West:15,WhatsApp:0,Whatshot:15,WheelchairPickup:0,WhereToVote:15,Widgets:15,Wifi:15,WifiCalling:15,WifiCalling3:15,WifiLock:15,WifiOff:15,WifiProtectedSetup:0,WifiTethering:7,WifiTetheringOff:0,Window:15,WineBar:15,Work:15,WorkOff:15,WorkOutline:15,Workspaces:15,WrapText:15,WrongLocation:7,Wysiwyg:15,Yard:15,YouTube:0,YoutubeSearchedFor:0,ZoomIn:15,ZoomOut:15,ZoomOutMap:15};const iconKeys=Object.keys(icons);const weightOptions=["Filled","TwoTone","Sharp","Rounded","Outlined",];const styleKeyOptions={15:[...weightOptions],7:["Filled","TwoTone","Sharp","Rounded"],2:["Filled","Sharp"]};const styleOptionPropKeys=Object.keys(styleKeyOptions).map(optionKey=>`iconStyle${optionKey}`);const lowercaseIconKeyPairs=iconKeys.reduce((res,key)=>{res[key.toLowerCase()]=key;return res;},{});/**
 * MATERIAL
 *
 * @framerIntrinsicWidth 24
 * @framerIntrinsicHeight 24
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export function Icon(props){const{color,selectByList,iconSearch,iconSelection,onClick,onMouseDown,onMouseUp,onMouseEnter,onMouseLeave,mirrored,style:style1}=props;const isMounted=useRef(false);const iconKey=useIconSelection(iconKeys,selectByList,iconSearch,iconSelection,lowercaseIconKeyPairs);// Get props to use for deps array
const styleOptionProps=styleOptionPropKeys.map(prop=>props[prop]);// Get style of icon
const iconStyle=useMemo(()=>{const iconStyleKey=icons[iconKey];if(!iconStyleKey)return;const activeStyle=props[`iconStyle${iconStyleKey}`];if(activeStyle==="Filled")return;return activeStyle;},[...styleOptionProps]);// Selected Icon Module
const[SelectedIcon,setSelectedIcon]=useState(iconKey==="Home"?HomeFactory(React):null);// Import the selected module or reset so null state
async function importModule(){// If bad search or doesn't exist, show null state
if(typeof icons[iconKey]!=="number"){setSelectedIcon(null);return;}// Get the selected module
try{const style=iconStyle?iconStyle:"";const iconModuleUrl=`${moduleBaseUrl}${iconKey}${style}.js@0.0.32`;// console.log(iconModuleUrl)
const module=await import(/* webpackIgnore: true */ iconModuleUrl);if(isMounted.current)setSelectedIcon(module.default(React));}catch{if(isMounted.current)setSelectedIcon(null);}}// Import module when new style or icon is selected
useEffect(()=>{isMounted.current=true;importModule();return()=>{isMounted.current=false;};},[iconKey,...styleOptionProps]);const isOnCanvas=RenderTarget.current()===RenderTarget.canvas;const emptyState=isOnCanvas?/*#__PURE__*/ _jsx(NullState,{}):null;return(/*#__PURE__*/ _jsx(motion.div,{style:{display:"contents"},onClick,onMouseEnter,onMouseLeave,onMouseDown,onMouseUp,children:SelectedIcon?/*#__PURE__*/ _jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{userSelect:"none",width:"100%",height:"100%",display:"inline-block",fill:color,flexShrink:0,transform:mirrored?"scale(-1, 1)":undefined,...style1},focusable:"false",viewBox:"0 0 24 24",color:color,children:SelectedIcon}):emptyState}));}Icon.displayName="Material";Icon.defaultProps={width:24,height:24,iconSelection:"Home",iconSearch:"Home",color:"#66F",selectByList:true,weight:"Filled",mirrored:false};function hideStyleOptions(props,styleOptions){const{selectByList,iconSearch,iconSelection}=props;const styleOptionsNumber=parseInt(styleOptions);const name=getIconSelection(iconKeys,selectByList,iconSearch,iconSelection,lowercaseIconKeyPairs);const icon=icons[name];if(!icon||styleOptionsNumber===0)return true;if(icon===styleOptionsNumber)return false;else return true;}addPropertyControls(Icon,{selectByList:{type:ControlType.Boolean,title:"Select",enabledTitle:"List",disabledTitle:"Search",defaultValue:Icon.defaultProps.selectByList},iconSelection:{type:ControlType.Enum,options:iconKeys,defaultValue:Icon.defaultProps.iconSelection,title:"Name",hidden:({selectByList})=>!selectByList,description:"Find every icon name on the [Material site](https://fonts.google.com/icons)"},iconSearch:{type:ControlType.String,title:"Name",placeholder:"Menu, Wifi, Box…",hidden:({selectByList})=>selectByList},mirrored:{type:ControlType.Boolean,enabledTitle:"Yes",disabledTitle:"No",defaultValue:Icon.defaultProps.mirrored},color:{type:ControlType.Color,title:"Color",defaultValue:Icon.defaultProps.color},...Object.keys(styleKeyOptions).reduce((result,optionKey)=>{result[`iconStyle${optionKey}`]={type:ControlType.Enum,title:"Style",defaultValue:"Filled",options:styleKeyOptions[optionKey],hidden:props=>hideStyleOptions(props,optionKey)};return result;},{}),...defaultEvents});
export const __FramerMetadata__ = {"exports":{"IconProps":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"Icon":{"type":"reactComponent","name":"Icon","slots":[],"annotations":{"framerContractVersion":"1","framerSupportedLayoutWidth":"fixed","framerIntrinsicWidth":"24","framerSupportedLayoutHeight":"fixed","framerIntrinsicHeight":"24"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Material.map