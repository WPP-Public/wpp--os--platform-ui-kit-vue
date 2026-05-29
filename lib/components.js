import { defineContainer } from './vue-component-lib/utils';
import { defineCustomElement as defineWppAccordion } from '@wppopen/components-library/components/wpp-accordion.js';
import { defineCustomElement as defineWppActionButton } from '@wppopen/components-library/components/wpp-action-button.js';
import { defineCustomElement as defineWppArtefact } from '@wppopen/components-library/components/wpp-artefact.js';
import { defineCustomElement as defineWppAutocomplete } from '@wppopen/components-library/components/wpp-autocomplete.js';
import { defineCustomElement as defineWppAvatar } from '@wppopen/components-library/components/wpp-avatar.js';
import { defineCustomElement as defineWppAvatarGroup } from '@wppopen/components-library/components/wpp-avatar-group.js';
import { defineCustomElement as defineWppBackToTopButton } from '@wppopen/components-library/components/wpp-back-to-top-button.js';
import { defineCustomElement as defineWppBanner } from '@wppopen/components-library/components/wpp-banner.js';
import { defineCustomElement as defineWppBasicNode } from '@wppopen/components-library/components/wpp-basic-node.js';
import { defineCustomElement as defineWppBreadcrumb } from '@wppopen/components-library/components/wpp-breadcrumb.js';
import { defineCustomElement as defineWppButton } from '@wppopen/components-library/components/wpp-button.js';
import { defineCustomElement as defineWppCard } from '@wppopen/components-library/components/wpp-card.js';
import { defineCustomElement as defineWppCardGroup } from '@wppopen/components-library/components/wpp-card-group.js';
import { defineCustomElement as defineWppChatConversation } from '@wppopen/components-library/components/wpp-chat-conversation.js';
import { defineCustomElement as defineWppChatConversationMessage } from '@wppopen/components-library/components/wpp-chat-conversation-message.js';
import { defineCustomElement as defineWppChatInput } from '@wppopen/components-library/components/wpp-chat-input.js';
import { defineCustomElement as defineWppChatNode } from '@wppopen/components-library/components/wpp-chat-node.js';
import { defineCustomElement as defineWppCheckbox } from '@wppopen/components-library/components/wpp-checkbox.js';
import { defineCustomElement as defineWppCheckboxGroup } from '@wppopen/components-library/components/wpp-checkbox-group.js';
import { defineCustomElement as defineWppColorPicker } from '@wppopen/components-library/components/wpp-color-picker.js';
import { defineCustomElement as defineWppCounter } from '@wppopen/components-library/components/wpp-counter.js';
import { defineCustomElement as defineWppDatepicker } from '@wppopen/components-library/components/wpp-datepicker.js';
import { defineCustomElement as defineWppDivider } from '@wppopen/components-library/components/wpp-divider.js';
import { defineCustomElement as defineWppEmpty404 } from '@wppopen/components-library/components/wpp-empty-404.js';
import { defineCustomElement as defineWppEmptyCards } from '@wppopen/components-library/components/wpp-empty-cards.js';
import { defineCustomElement as defineWppEmptyContent } from '@wppopen/components-library/components/wpp-empty-content.js';
import { defineCustomElement as defineWppEmptyDataviz } from '@wppopen/components-library/components/wpp-empty-dataviz.js';
import { defineCustomElement as defineWppEmptyDowntime } from '@wppopen/components-library/components/wpp-empty-downtime.js';
import { defineCustomElement as defineWppEmptyError } from '@wppopen/components-library/components/wpp-empty-error.js';
import { defineCustomElement as defineWppEmptyFolder } from '@wppopen/components-library/components/wpp-empty-folder.js';
import { defineCustomElement as defineWppEmptyNoAccess } from '@wppopen/components-library/components/wpp-empty-no-access.js';
import { defineCustomElement as defineWppEmptyNoConnection } from '@wppopen/components-library/components/wpp-empty-no-connection.js';
import { defineCustomElement as defineWppEmptyNothingFound } from '@wppopen/components-library/components/wpp-empty-nothing-found.js';
import { defineCustomElement as defineWppEmptyNotifications } from '@wppopen/components-library/components/wpp-empty-notifications.js';
import { defineCustomElement as defineWppEmptyTable } from '@wppopen/components-library/components/wpp-empty-table.js';
import { defineCustomElement as defineWppExpandableCard } from '@wppopen/components-library/components/wpp-expandable-card.js';
import { defineCustomElement as defineWppFileUpload } from '@wppopen/components-library/components/wpp-file-upload.js';
import { defineCustomElement as defineWppFileUploadItem } from '@wppopen/components-library/components/wpp-file-upload-item.js';
import { defineCustomElement as defineWppFilterButton } from '@wppopen/components-library/components/wpp-filter-button.js';
import { defineCustomElement as defineWppFloatingButton } from '@wppopen/components-library/components/wpp-floating-button.js';
import { defineCustomElement as defineWppFloatingToolbar } from '@wppopen/components-library/components/wpp-floating-toolbar.js';
import { defineCustomElement as defineWppFullScreenModal } from '@wppopen/components-library/components/wpp-full-screen-modal.js';
import { defineCustomElement as defineWppGrid } from '@wppopen/components-library/components/wpp-grid.js';
import { defineCustomElement as defineWppHandle } from '@wppopen/components-library/components/wpp-handle.js';
import { defineCustomElement as defineWppIconAbout } from '@wppopen/components-library/components/wpp-icon-about.js';
import { defineCustomElement as defineWppIconAccessibility } from '@wppopen/components-library/components/wpp-icon-accessibility.js';
import { defineCustomElement as defineWppIconAccordion } from '@wppopen/components-library/components/wpp-icon-accordion.js';
import { defineCustomElement as defineWppIconAction } from '@wppopen/components-library/components/wpp-icon-action.js';
import { defineCustomElement as defineWppIconAdd } from '@wppopen/components-library/components/wpp-icon-add.js';
import { defineCustomElement as defineWppIconAddApp } from '@wppopen/components-library/components/wpp-icon-add-app.js';
import { defineCustomElement as defineWppIconAddCircle } from '@wppopen/components-library/components/wpp-icon-add-circle.js';
import { defineCustomElement as defineWppIconAddDocument } from '@wppopen/components-library/components/wpp-icon-add-document.js';
import { defineCustomElement as defineWppIconAddFolder } from '@wppopen/components-library/components/wpp-icon-add-folder.js';
import { defineCustomElement as defineWppIconAdmin } from '@wppopen/components-library/components/wpp-icon-admin.js';
import { defineCustomElement as defineWppIconAi } from '@wppopen/components-library/components/wpp-icon-ai.js';
import { defineCustomElement as defineWppIconAirPollution } from '@wppopen/components-library/components/wpp-icon-air-pollution.js';
import { defineCustomElement as defineWppIconAirplane } from '@wppopen/components-library/components/wpp-icon-airplane.js';
import { defineCustomElement as defineWppIconAngry } from '@wppopen/components-library/components/wpp-icon-angry.js';
import { defineCustomElement as defineWppIconApp } from '@wppopen/components-library/components/wpp-icon-app.js';
import { defineCustomElement as defineWppIconAppFolder } from '@wppopen/components-library/components/wpp-icon-app-folder.js';
import { defineCustomElement as defineWppIconAppStore } from '@wppopen/components-library/components/wpp-icon-app-store.js';
import { defineCustomElement as defineWppIconApprovals } from '@wppopen/components-library/components/wpp-icon-approvals.js';
import { defineCustomElement as defineWppIconArchive } from '@wppopen/components-library/components/wpp-icon-archive.js';
import { defineCustomElement as defineWppIconArchiveMultiple } from '@wppopen/components-library/components/wpp-icon-archive-multiple.js';
import { defineCustomElement as defineWppIconArrow } from '@wppopen/components-library/components/wpp-icon-arrow.js';
import { defineCustomElement as defineWppIconAsk } from '@wppopen/components-library/components/wpp-icon-ask.js';
import { defineCustomElement as defineWppIconAssistant } from '@wppopen/components-library/components/wpp-icon-assistant.js';
import { defineCustomElement as defineWppIconAtm } from '@wppopen/components-library/components/wpp-icon-atm.js';
import { defineCustomElement as defineWppIconAttach } from '@wppopen/components-library/components/wpp-icon-attach.js';
import { defineCustomElement as defineWppIconAutoSum } from '@wppopen/components-library/components/wpp-icon-auto-sum.js';
import { defineCustomElement as defineWppIconAutofit } from '@wppopen/components-library/components/wpp-icon-autofit.js';
import { defineCustomElement as defineWppIconAutofitHeight } from '@wppopen/components-library/components/wpp-icon-autofit-height.js';
import { defineCustomElement as defineWppIconAutofitHeightDotted } from '@wppopen/components-library/components/wpp-icon-autofit-height-dotted.js';
import { defineCustomElement as defineWppIconAutofitWidth } from '@wppopen/components-library/components/wpp-icon-autofit-width.js';
import { defineCustomElement as defineWppIconAutofitWidthDotted } from '@wppopen/components-library/components/wpp-icon-autofit-width-dotted.js';
import { defineCustomElement as defineWppIconAvailableCheckmark } from '@wppopen/components-library/components/wpp-icon-available-checkmark.js';
import { defineCustomElement as defineWppIconAvailableUpdate } from '@wppopen/components-library/components/wpp-icon-available-update.js';
import { defineCustomElement as defineWppIconBank } from '@wppopen/components-library/components/wpp-icon-bank.js';
import { defineCustomElement as defineWppIconBar } from '@wppopen/components-library/components/wpp-icon-bar.js';
import { defineCustomElement as defineWppIconBarChart } from '@wppopen/components-library/components/wpp-icon-bar-chart.js';
import { defineCustomElement as defineWppIconBarHorizontal } from '@wppopen/components-library/components/wpp-icon-bar-horizontal.js';
import { defineCustomElement as defineWppIconBicycle } from '@wppopen/components-library/components/wpp-icon-bicycle.js';
import { defineCustomElement as defineWppIconBlockquote } from '@wppopen/components-library/components/wpp-icon-blockquote.js';
import { defineCustomElement as defineWppIconBluetoothOff } from '@wppopen/components-library/components/wpp-icon-bluetooth-off.js';
import { defineCustomElement as defineWppIconBluetoothOn } from '@wppopen/components-library/components/wpp-icon-bluetooth-on.js';
import { defineCustomElement as defineWppIconBoard } from '@wppopen/components-library/components/wpp-icon-board.js';
import { defineCustomElement as defineWppIconBold } from '@wppopen/components-library/components/wpp-icon-bold.js';
import { defineCustomElement as defineWppIconBook } from '@wppopen/components-library/components/wpp-icon-book.js';
import { defineCustomElement as defineWppIconBookContacts } from '@wppopen/components-library/components/wpp-icon-book-contacts.js';
import { defineCustomElement as defineWppIconBookFaq } from '@wppopen/components-library/components/wpp-icon-book-faq.js';
import { defineCustomElement as defineWppIconBookInformation } from '@wppopen/components-library/components/wpp-icon-book-information.js';
import { defineCustomElement as defineWppIconBookSearch } from '@wppopen/components-library/components/wpp-icon-book-search.js';
import { defineCustomElement as defineWppIconBookmark } from '@wppopen/components-library/components/wpp-icon-bookmark.js';
import { defineCustomElement as defineWppIconBookmarkAdd } from '@wppopen/components-library/components/wpp-icon-bookmark-add.js';
import { defineCustomElement as defineWppIconBookmarkSelected } from '@wppopen/components-library/components/wpp-icon-bookmark-selected.js';
import { defineCustomElement as defineWppIconBorder } from '@wppopen/components-library/components/wpp-icon-border.js';
import { defineCustomElement as defineWppIconBorderAll } from '@wppopen/components-library/components/wpp-icon-border-all.js';
import { defineCustomElement as defineWppIconBorderBottomDouble } from '@wppopen/components-library/components/wpp-icon-border-bottom-double.js';
import { defineCustomElement as defineWppIconBorderLeftRight } from '@wppopen/components-library/components/wpp-icon-border-left-right.js';
import { defineCustomElement as defineWppIconBorderNone } from '@wppopen/components-library/components/wpp-icon-border-none.js';
import { defineCustomElement as defineWppIconBorderOutside } from '@wppopen/components-library/components/wpp-icon-border-outside.js';
import { defineCustomElement as defineWppIconBorderOutsideThick } from '@wppopen/components-library/components/wpp-icon-border-outside-thick.js';
import { defineCustomElement as defineWppIconBorderTopBottom } from '@wppopen/components-library/components/wpp-icon-border-top-bottom.js';
import { defineCustomElement as defineWppIconBorderTopBottomDouble } from '@wppopen/components-library/components/wpp-icon-border-top-bottom-double.js';
import { defineCustomElement as defineWppIconBorderTopBottomThick } from '@wppopen/components-library/components/wpp-icon-border-top-bottom-thick.js';
import { defineCustomElement as defineWppIconBot } from '@wppopen/components-library/components/wpp-icon-bot.js';
import { defineCustomElement as defineWppIconBounce } from '@wppopen/components-library/components/wpp-icon-bounce.js';
import { defineCustomElement as defineWppIconBranch } from '@wppopen/components-library/components/wpp-icon-branch.js';
import { defineCustomElement as defineWppIconBranchRequest } from '@wppopen/components-library/components/wpp-icon-branch-request.js';
import { defineCustomElement as defineWppIconBranchReview } from '@wppopen/components-library/components/wpp-icon-branch-review.js';
import { defineCustomElement as defineWppIconBtc } from '@wppopen/components-library/components/wpp-icon-btc.js';
import { defineCustomElement as defineWppIconBus } from '@wppopen/components-library/components/wpp-icon-bus.js';
import { defineCustomElement as defineWppIconBusiness } from '@wppopen/components-library/components/wpp-icon-business.js';
import { defineCustomElement as defineWppIconCafe } from '@wppopen/components-library/components/wpp-icon-cafe.js';
import { defineCustomElement as defineWppIconCalendar } from '@wppopen/components-library/components/wpp-icon-calendar.js';
import { defineCustomElement as defineWppIconCalendar3Days } from '@wppopen/components-library/components/wpp-icon-calendar-3-days.js';
import { defineCustomElement as defineWppIconCalendarAdd } from '@wppopen/components-library/components/wpp-icon-calendar-add.js';
import { defineCustomElement as defineWppIconCalendarDate } from '@wppopen/components-library/components/wpp-icon-calendar-date.js';
import { defineCustomElement as defineWppIconCalendarDismiss } from '@wppopen/components-library/components/wpp-icon-calendar-dismiss.js';
import { defineCustomElement as defineWppIconCalendarError } from '@wppopen/components-library/components/wpp-icon-calendar-error.js';
import { defineCustomElement as defineWppIconCalendarMonth } from '@wppopen/components-library/components/wpp-icon-calendar-month.js';
import { defineCustomElement as defineWppIconCameraAdd } from '@wppopen/components-library/components/wpp-icon-camera-add.js';
import { defineCustomElement as defineWppIconCameraOff } from '@wppopen/components-library/components/wpp-icon-camera-off.js';
import { defineCustomElement as defineWppIconCameraOn } from '@wppopen/components-library/components/wpp-icon-camera-on.js';
import { defineCustomElement as defineWppIconCameraSwitch } from '@wppopen/components-library/components/wpp-icon-camera-switch.js';
import { defineCustomElement as defineWppIconCampaign } from '@wppopen/components-library/components/wpp-icon-campaign.js';
import { defineCustomElement as defineWppIconCaptionOff } from '@wppopen/components-library/components/wpp-icon-caption-off.js';
import { defineCustomElement as defineWppIconCaptionOn } from '@wppopen/components-library/components/wpp-icon-caption-on.js';
import { defineCustomElement as defineWppIconCarousel } from '@wppopen/components-library/components/wpp-icon-carousel.js';
import { defineCustomElement as defineWppIconCart } from '@wppopen/components-library/components/wpp-icon-cart.js';
import { defineCustomElement as defineWppIconCase } from '@wppopen/components-library/components/wpp-icon-case.js';
import { defineCustomElement as defineWppIconCast } from '@wppopen/components-library/components/wpp-icon-cast.js';
import { defineCustomElement as defineWppIconCellularData3g } from '@wppopen/components-library/components/wpp-icon-cellular-data-3g.js';
import { defineCustomElement as defineWppIconCellularData4g } from '@wppopen/components-library/components/wpp-icon-cellular-data-4g.js';
import { defineCustomElement as defineWppIconCellularData5g } from '@wppopen/components-library/components/wpp-icon-cellular-data-5g.js';
import { defineCustomElement as defineWppIconCellularDataOff } from '@wppopen/components-library/components/wpp-icon-cellular-data-off.js';
import { defineCustomElement as defineWppIconCellularDataOn } from '@wppopen/components-library/components/wpp-icon-cellular-data-on.js';
import { defineCustomElement as defineWppIconChannel } from '@wppopen/components-library/components/wpp-icon-channel.js';
import { defineCustomElement as defineWppIconChatMessage } from '@wppopen/components-library/components/wpp-icon-chat-message.js';
import { defineCustomElement as defineWppIconChatMessageNew } from '@wppopen/components-library/components/wpp-icon-chat-message-new.js';
import { defineCustomElement as defineWppIconChatMessageOff } from '@wppopen/components-library/components/wpp-icon-chat-message-off.js';
import { defineCustomElement as defineWppIconChatVideo } from '@wppopen/components-library/components/wpp-icon-chat-video.js';
import { defineCustomElement as defineWppIconChevron } from '@wppopen/components-library/components/wpp-icon-chevron.js';
import { defineCustomElement as defineWppIconCinema } from '@wppopen/components-library/components/wpp-icon-cinema.js';
import { defineCustomElement as defineWppIconCircle } from '@wppopen/components-library/components/wpp-icon-circle.js';
import { defineCustomElement as defineWppIconClock } from '@wppopen/components-library/components/wpp-icon-clock.js';
import { defineCustomElement as defineWppIconClose } from '@wppopen/components-library/components/wpp-icon-close.js';
import { defineCustomElement as defineWppIconCloudDismiss } from '@wppopen/components-library/components/wpp-icon-cloud-dismiss.js';
import { defineCustomElement as defineWppIconCloudSuccess } from '@wppopen/components-library/components/wpp-icon-cloud-success.js';
import { defineCustomElement as defineWppIconCloudSync } from '@wppopen/components-library/components/wpp-icon-cloud-sync.js';
import { defineCustomElement as defineWppIconCloudUpload } from '@wppopen/components-library/components/wpp-icon-cloud-upload.js';
import { defineCustomElement as defineWppIconCodeView } from '@wppopen/components-library/components/wpp-icon-code-view.js';
import { defineCustomElement as defineWppIconCollapse } from '@wppopen/components-library/components/wpp-icon-collapse.js';
import { defineCustomElement as defineWppIconCollection } from '@wppopen/components-library/components/wpp-icon-collection.js';
import { defineCustomElement as defineWppIconColour } from '@wppopen/components-library/components/wpp-icon-colour.js';
import { defineCustomElement as defineWppIconColumnsOne } from '@wppopen/components-library/components/wpp-icon-columns-one.js';
import { defineCustomElement as defineWppIconColumnsThree } from '@wppopen/components-library/components/wpp-icon-columns-three.js';
import { defineCustomElement as defineWppIconColumnsTwo } from '@wppopen/components-library/components/wpp-icon-columns-two.js';
import { defineCustomElement as defineWppIconComment } from '@wppopen/components-library/components/wpp-icon-comment.js';
import { defineCustomElement as defineWppIconCommentOff } from '@wppopen/components-library/components/wpp-icon-comment-off.js';
import { defineCustomElement as defineWppIconCommunication } from '@wppopen/components-library/components/wpp-icon-communication.js';
import { defineCustomElement as defineWppIconCompose } from '@wppopen/components-library/components/wpp-icon-compose.js';
import { defineCustomElement as defineWppIconCookies } from '@wppopen/components-library/components/wpp-icon-cookies.js';
import { defineCustomElement as defineWppIconCopy } from '@wppopen/components-library/components/wpp-icon-copy.js';
import { defineCustomElement as defineWppIconCrop } from '@wppopen/components-library/components/wpp-icon-crop.js';
import { defineCustomElement as defineWppIconCross } from '@wppopen/components-library/components/wpp-icon-cross.js';
import { defineCustomElement as defineWppIconCta } from '@wppopen/components-library/components/wpp-icon-cta.js';
import { defineCustomElement as defineWppIconCube } from '@wppopen/components-library/components/wpp-icon-cube.js';
import { defineCustomElement as defineWppIconCurrency } from '@wppopen/components-library/components/wpp-icon-currency.js';
import { defineCustomElement as defineWppIconCut } from '@wppopen/components-library/components/wpp-icon-cut.js';
import { defineCustomElement as defineWppIconDarkTheme } from '@wppopen/components-library/components/wpp-icon-dark-theme.js';
import { defineCustomElement as defineWppIconDash } from '@wppopen/components-library/components/wpp-icon-dash.js';
import { defineCustomElement as defineWppIconDataArea } from '@wppopen/components-library/components/wpp-icon-data-area.js';
import { defineCustomElement as defineWppIconDataCloudOff } from '@wppopen/components-library/components/wpp-icon-data-cloud-off.js';
import { defineCustomElement as defineWppIconDataCloudOn } from '@wppopen/components-library/components/wpp-icon-data-cloud-on.js';
import { defineCustomElement as defineWppIconDataFunnel } from '@wppopen/components-library/components/wpp-icon-data-funnel.js';
import { defineCustomElement as defineWppIconDataHistogram } from '@wppopen/components-library/components/wpp-icon-data-histogram.js';
import { defineCustomElement as defineWppIconDataLine } from '@wppopen/components-library/components/wpp-icon-data-line.js';
import { defineCustomElement as defineWppIconDataScatter } from '@wppopen/components-library/components/wpp-icon-data-scatter.js';
import { defineCustomElement as defineWppIconDataSunburst } from '@wppopen/components-library/components/wpp-icon-data-sunburst.js';
import { defineCustomElement as defineWppIconDataTransfer } from '@wppopen/components-library/components/wpp-icon-data-transfer.js';
import { defineCustomElement as defineWppIconDataTreemap } from '@wppopen/components-library/components/wpp-icon-data-treemap.js';
import { defineCustomElement as defineWppIconDataTrending } from '@wppopen/components-library/components/wpp-icon-data-trending.js';
import { defineCustomElement as defineWppIconDataUsage } from '@wppopen/components-library/components/wpp-icon-data-usage.js';
import { defineCustomElement as defineWppIconDataViewCards } from '@wppopen/components-library/components/wpp-icon-data-view-cards.js';
import { defineCustomElement as defineWppIconDataViewList } from '@wppopen/components-library/components/wpp-icon-data-view-list.js';
import { defineCustomElement as defineWppIconDataWaterfall } from '@wppopen/components-library/components/wpp-icon-data-waterfall.js';
import { defineCustomElement as defineWppIconDataWhisker } from '@wppopen/components-library/components/wpp-icon-data-whisker.js';
import { defineCustomElement as defineWppIconDatabase } from '@wppopen/components-library/components/wpp-icon-database.js';
import { defineCustomElement as defineWppIconDecrease } from '@wppopen/components-library/components/wpp-icon-decrease.js';
import { defineCustomElement as defineWppIconDesign } from '@wppopen/components-library/components/wpp-icon-design.js';
import { defineCustomElement as defineWppIconDesktop } from '@wppopen/components-library/components/wpp-icon-desktop.js';
import { defineCustomElement as defineWppIconDiamond } from '@wppopen/components-library/components/wpp-icon-diamond.js';
import { defineCustomElement as defineWppIconDirections } from '@wppopen/components-library/components/wpp-icon-directions.js';
import { defineCustomElement as defineWppIconDiversity } from '@wppopen/components-library/components/wpp-icon-diversity.js';
import { defineCustomElement as defineWppIconDocument } from '@wppopen/components-library/components/wpp-icon-document.js';
import { defineCustomElement as defineWppIconDocumentBlocked } from '@wppopen/components-library/components/wpp-icon-document-blocked.js';
import { defineCustomElement as defineWppIconDocumentError } from '@wppopen/components-library/components/wpp-icon-document-error.js';
import { defineCustomElement as defineWppIconDollar } from '@wppopen/components-library/components/wpp-icon-dollar.js';
import { defineCustomElement as defineWppIconDone } from '@wppopen/components-library/components/wpp-icon-done.js';
import { defineCustomElement as defineWppIconDoubleChevron } from '@wppopen/components-library/components/wpp-icon-double-chevron.js';
import { defineCustomElement as defineWppIconDownload } from '@wppopen/components-library/components/wpp-icon-download.js';
import { defineCustomElement as defineWppIconDraft } from '@wppopen/components-library/components/wpp-icon-draft.js';
import { defineCustomElement as defineWppIconDrag } from '@wppopen/components-library/components/wpp-icon-drag.js';
import { defineCustomElement as defineWppIconDragAndDrop } from '@wppopen/components-library/components/wpp-icon-drag-and-drop.js';
import { defineCustomElement as defineWppIconEco } from '@wppopen/components-library/components/wpp-icon-eco.js';
import { defineCustomElement as defineWppIconEdit } from '@wppopen/components-library/components/wpp-icon-edit.js';
import { defineCustomElement as defineWppIconEditText } from '@wppopen/components-library/components/wpp-icon-edit-text.js';
import { defineCustomElement as defineWppIconEditorLowercase } from '@wppopen/components-library/components/wpp-icon-editor-lowercase.js';
import { defineCustomElement as defineWppIconEditorObjectAlignmentCenter } from '@wppopen/components-library/components/wpp-icon-editor-object-alignment-center.js';
import { defineCustomElement as defineWppIconEditorTitle } from '@wppopen/components-library/components/wpp-icon-editor-title.js';
import { defineCustomElement as defineWppIconEditorUppercase } from '@wppopen/components-library/components/wpp-icon-editor-uppercase.js';
import { defineCustomElement as defineWppIconEffects } from '@wppopen/components-library/components/wpp-icon-effects.js';
import { defineCustomElement as defineWppIconEnlarge } from '@wppopen/components-library/components/wpp-icon-enlarge.js';
import { defineCustomElement as defineWppIconEnter } from '@wppopen/components-library/components/wpp-icon-enter.js';
import { defineCustomElement as defineWppIconEraser } from '@wppopen/components-library/components/wpp-icon-eraser.js';
import { defineCustomElement as defineWppIconError } from '@wppopen/components-library/components/wpp-icon-error.js';
import { defineCustomElement as defineWppIconEth } from '@wppopen/components-library/components/wpp-icon-eth.js';
import { defineCustomElement as defineWppIconEuro } from '@wppopen/components-library/components/wpp-icon-euro.js';
import { defineCustomElement as defineWppIconEvent } from '@wppopen/components-library/components/wpp-icon-event.js';
import { defineCustomElement as defineWppIconExpand } from '@wppopen/components-library/components/wpp-icon-expand.js';
import { defineCustomElement as defineWppIconExperiment } from '@wppopen/components-library/components/wpp-icon-experiment.js';
import { defineCustomElement as defineWppIconExport } from '@wppopen/components-library/components/wpp-icon-export.js';
import { defineCustomElement as defineWppIconExportFile } from '@wppopen/components-library/components/wpp-icon-export-file.js';
import { defineCustomElement as defineWppIconExtension } from '@wppopen/components-library/components/wpp-icon-extension.js';
import { defineCustomElement as defineWppIconExternalLink } from '@wppopen/components-library/components/wpp-icon-external-link.js';
import { defineCustomElement as defineWppIconEyeOff } from '@wppopen/components-library/components/wpp-icon-eye-off.js';
import { defineCustomElement as defineWppIconEyeOn } from '@wppopen/components-library/components/wpp-icon-eye-on.js';
import { defineCustomElement as defineWppIconEyedropper } from '@wppopen/components-library/components/wpp-icon-eyedropper.js';
import { defineCustomElement as defineWppIconFactory } from '@wppopen/components-library/components/wpp-icon-factory.js';
import { defineCustomElement as defineWppIconFavourites } from '@wppopen/components-library/components/wpp-icon-favourites.js';
import { defineCustomElement as defineWppIconFavouritesFilled } from '@wppopen/components-library/components/wpp-icon-favourites-filled.js';
import { defineCustomElement as defineWppIconFile } from '@wppopen/components-library/components/wpp-icon-file.js';
import { defineCustomElement as defineWppIconFileCss } from '@wppopen/components-library/components/wpp-icon-file-css.js';
import { defineCustomElement as defineWppIconFileJs } from '@wppopen/components-library/components/wpp-icon-file-js.js';
import { defineCustomElement as defineWppIconFilePdf } from '@wppopen/components-library/components/wpp-icon-file-pdf.js';
import { defineCustomElement as defineWppIconFileZip } from '@wppopen/components-library/components/wpp-icon-file-zip.js';
import { defineCustomElement as defineWppIconFill } from '@wppopen/components-library/components/wpp-icon-fill.js';
import { defineCustomElement as defineWppIconFilter } from '@wppopen/components-library/components/wpp-icon-filter.js';
import { defineCustomElement as defineWppIconFingerprint } from '@wppopen/components-library/components/wpp-icon-fingerprint.js';
import { defineCustomElement as defineWppIconFitHeight } from '@wppopen/components-library/components/wpp-icon-fit-height.js';
import { defineCustomElement as defineWppIconFitWidth } from '@wppopen/components-library/components/wpp-icon-fit-width.js';
import { defineCustomElement as defineWppIconFlagOff } from '@wppopen/components-library/components/wpp-icon-flag-off.js';
import { defineCustomElement as defineWppIconFlagOn } from '@wppopen/components-library/components/wpp-icon-flag-on.js';
import { defineCustomElement as defineWppIconFlip } from '@wppopen/components-library/components/wpp-icon-flip.js';
import { defineCustomElement as defineWppIconFloatCenter } from '@wppopen/components-library/components/wpp-icon-float-center.js';
import { defineCustomElement as defineWppIconFloatLeft } from '@wppopen/components-library/components/wpp-icon-float-left.js';
import { defineCustomElement as defineWppIconFloatRight } from '@wppopen/components-library/components/wpp-icon-float-right.js';
import { defineCustomElement as defineWppIconFluidWorkflow } from '@wppopen/components-library/components/wpp-icon-fluid-workflow.js';
import { defineCustomElement as defineWppIconFolder } from '@wppopen/components-library/components/wpp-icon-folder.js';
import { defineCustomElement as defineWppIconFolderBlocked } from '@wppopen/components-library/components/wpp-icon-folder-blocked.js';
import { defineCustomElement as defineWppIconFolderLink } from '@wppopen/components-library/components/wpp-icon-folder-link.js';
import { defineCustomElement as defineWppIconFolderOpen } from '@wppopen/components-library/components/wpp-icon-folder-open.js';
import { defineCustomElement as defineWppIconFont } from '@wppopen/components-library/components/wpp-icon-font.js';
import { defineCustomElement as defineWppIconForward } from '@wppopen/components-library/components/wpp-icon-forward.js';
import { defineCustomElement as defineWppIconFullscreen } from '@wppopen/components-library/components/wpp-icon-fullscreen.js';
import { defineCustomElement as defineWppIconFullscreenMinimise } from '@wppopen/components-library/components/wpp-icon-fullscreen-minimise.js';
import { defineCustomElement as defineWppIconGallery } from '@wppopen/components-library/components/wpp-icon-gallery.js';
import { defineCustomElement as defineWppIconGasStation } from '@wppopen/components-library/components/wpp-icon-gas-station.js';
import { defineCustomElement as defineWppIconGear } from '@wppopen/components-library/components/wpp-icon-gear.js';
import { defineCustomElement as defineWppIconGif } from '@wppopen/components-library/components/wpp-icon-gif.js';
import { defineCustomElement as defineWppIconGlobe } from '@wppopen/components-library/components/wpp-icon-globe.js';
import { defineCustomElement as defineWppIconGps } from '@wppopen/components-library/components/wpp-icon-gps.js';
import { defineCustomElement as defineWppIconGraph } from '@wppopen/components-library/components/wpp-icon-graph.js';
import { defineCustomElement as defineWppIconGrid } from '@wppopen/components-library/components/wpp-icon-grid.js';
import { defineCustomElement as defineWppIconH1 } from '@wppopen/components-library/components/wpp-icon-h1.js';
import { defineCustomElement as defineWppIconH2 } from '@wppopen/components-library/components/wpp-icon-h2.js';
import { defineCustomElement as defineWppIconH3 } from '@wppopen/components-library/components/wpp-icon-h3.js';
import { defineCustomElement as defineWppIconHandDraw } from '@wppopen/components-library/components/wpp-icon-hand-draw.js';
import { defineCustomElement as defineWppIconHandOff } from '@wppopen/components-library/components/wpp-icon-hand-off.js';
import { defineCustomElement as defineWppIconHandOn } from '@wppopen/components-library/components/wpp-icon-hand-on.js';
import { defineCustomElement as defineWppIconHash } from '@wppopen/components-library/components/wpp-icon-hash.js';
import { defineCustomElement as defineWppIconHd } from '@wppopen/components-library/components/wpp-icon-hd.js';
import { defineCustomElement as defineWppIconHdr } from '@wppopen/components-library/components/wpp-icon-hdr.js';
import { defineCustomElement as defineWppIconHeadphones } from '@wppopen/components-library/components/wpp-icon-headphones.js';
import { defineCustomElement as defineWppIconHelp } from '@wppopen/components-library/components/wpp-icon-help.js';
import { defineCustomElement as defineWppIconHistory } from '@wppopen/components-library/components/wpp-icon-history.js';
import { defineCustomElement as defineWppIconHome } from '@wppopen/components-library/components/wpp-icon-home.js';
import { defineCustomElement as defineWppIconHomeCheckmark } from '@wppopen/components-library/components/wpp-icon-home-checkmark.js';
import { defineCustomElement as defineWppIconHospital } from '@wppopen/components-library/components/wpp-icon-hospital.js';
import { defineCustomElement as defineWppIconHub } from '@wppopen/components-library/components/wpp-icon-hub.js';
import { defineCustomElement as defineWppIconIcons } from '@wppopen/components-library/components/wpp-icon-icons.js';
import { defineCustomElement as defineWppIconIdea } from '@wppopen/components-library/components/wpp-icon-idea.js';
import { defineCustomElement as defineWppIconIframe } from '@wppopen/components-library/components/wpp-icon-iframe.js';
import { defineCustomElement as defineWppIconImage } from '@wppopen/components-library/components/wpp-icon-image.js';
import { defineCustomElement as defineWppIconImageOff } from '@wppopen/components-library/components/wpp-icon-image-off.js';
import { defineCustomElement as defineWppIconImport } from '@wppopen/components-library/components/wpp-icon-import.js';
import { defineCustomElement as defineWppIconInbox } from '@wppopen/components-library/components/wpp-icon-inbox.js';
import { defineCustomElement as defineWppIconIncognito } from '@wppopen/components-library/components/wpp-icon-incognito.js';
import { defineCustomElement as defineWppIconIncomplete } from '@wppopen/components-library/components/wpp-icon-incomplete.js';
import { defineCustomElement as defineWppIconIncrease } from '@wppopen/components-library/components/wpp-icon-increase.js';
import { defineCustomElement as defineWppIconIndentDecrease } from '@wppopen/components-library/components/wpp-icon-indent-decrease.js';
import { defineCustomElement as defineWppIconIndentIncrease } from '@wppopen/components-library/components/wpp-icon-indent-increase.js';
import { defineCustomElement as defineWppIconInfo } from '@wppopen/components-library/components/wpp-icon-info.js';
import { defineCustomElement as defineWppIconInfoMessage } from '@wppopen/components-library/components/wpp-icon-info-message.js';
import { defineCustomElement as defineWppIconInstallUpdate } from '@wppopen/components-library/components/wpp-icon-install-update.js';
import { defineCustomElement as defineWppIconItalic } from '@wppopen/components-library/components/wpp-icon-italic.js';
import { defineCustomElement as defineWppIconJavaScript } from '@wppopen/components-library/components/wpp-icon-java-script.js';
import { defineCustomElement as defineWppIconJoin } from '@wppopen/components-library/components/wpp-icon-join.js';
import { defineCustomElement as defineWppIconKey } from '@wppopen/components-library/components/wpp-icon-key.js';
import { defineCustomElement as defineWppIconKeyboard } from '@wppopen/components-library/components/wpp-icon-keyboard.js';
import { defineCustomElement as defineWppIconLaptop } from '@wppopen/components-library/components/wpp-icon-laptop.js';
import { defineCustomElement as defineWppIconLaugh } from '@wppopen/components-library/components/wpp-icon-laugh.js';
import { defineCustomElement as defineWppIconLaunch } from '@wppopen/components-library/components/wpp-icon-launch.js';
import { defineCustomElement as defineWppIconLayer } from '@wppopen/components-library/components/wpp-icon-layer.js';
import { defineCustomElement as defineWppIconLeaf } from '@wppopen/components-library/components/wpp-icon-leaf.js';
import { defineCustomElement as defineWppIconLibrary } from '@wppopen/components-library/components/wpp-icon-library.js';
import { defineCustomElement as defineWppIconLibraryBuilding } from '@wppopen/components-library/components/wpp-icon-library-building.js';
import { defineCustomElement as defineWppIconLikeOff } from '@wppopen/components-library/components/wpp-icon-like-off.js';
import { defineCustomElement as defineWppIconLikeOn } from '@wppopen/components-library/components/wpp-icon-like-on.js';
import { defineCustomElement as defineWppIconLink } from '@wppopen/components-library/components/wpp-icon-link.js';
import { defineCustomElement as defineWppIconLive } from '@wppopen/components-library/components/wpp-icon-live.js';
import { defineCustomElement as defineWppIconLocation } from '@wppopen/components-library/components/wpp-icon-location.js';
import { defineCustomElement as defineWppIconLockOff } from '@wppopen/components-library/components/wpp-icon-lock-off.js';
import { defineCustomElement as defineWppIconLockOn } from '@wppopen/components-library/components/wpp-icon-lock-on.js';
import { defineCustomElement as defineWppIconLodging } from '@wppopen/components-library/components/wpp-icon-lodging.js';
import { defineCustomElement as defineWppIconLogin } from '@wppopen/components-library/components/wpp-icon-login.js';
import { defineCustomElement as defineWppIconLogout } from '@wppopen/components-library/components/wpp-icon-logout.js';
import { defineCustomElement as defineWppIconMagicWand } from '@wppopen/components-library/components/wpp-icon-magic-wand.js';
import { defineCustomElement as defineWppIconMail } from '@wppopen/components-library/components/wpp-icon-mail.js';
import { defineCustomElement as defineWppIconMailAdd } from '@wppopen/components-library/components/wpp-icon-mail-add.js';
import { defineCustomElement as defineWppIconMailAllRead } from '@wppopen/components-library/components/wpp-icon-mail-all-read.js';
import { defineCustomElement as defineWppIconMailBlocked } from '@wppopen/components-library/components/wpp-icon-mail-blocked.js';
import { defineCustomElement as defineWppIconMailCopy } from '@wppopen/components-library/components/wpp-icon-mail-copy.js';
import { defineCustomElement as defineWppIconMailOff } from '@wppopen/components-library/components/wpp-icon-mail-off.js';
import { defineCustomElement as defineWppIconMailRead } from '@wppopen/components-library/components/wpp-icon-mail-read.js';
import { defineCustomElement as defineWppIconMap } from '@wppopen/components-library/components/wpp-icon-map.js';
import { defineCustomElement as defineWppIconMathFormula } from '@wppopen/components-library/components/wpp-icon-math-formula.js';
import { defineCustomElement as defineWppIconMaximise } from '@wppopen/components-library/components/wpp-icon-maximise.js';
import { defineCustomElement as defineWppIconMeet } from '@wppopen/components-library/components/wpp-icon-meet.js';
import { defineCustomElement as defineWppIconMention } from '@wppopen/components-library/components/wpp-icon-mention.js';
import { defineCustomElement as defineWppIconMerge } from '@wppopen/components-library/components/wpp-icon-merge.js';
import { defineCustomElement as defineWppIconMicBlocked } from '@wppopen/components-library/components/wpp-icon-mic-blocked.js';
import { defineCustomElement as defineWppIconMicOff } from '@wppopen/components-library/components/wpp-icon-mic-off.js';
import { defineCustomElement as defineWppIconMicOn } from '@wppopen/components-library/components/wpp-icon-mic-on.js';
import { defineCustomElement as defineWppIconMinimise } from '@wppopen/components-library/components/wpp-icon-minimise.js';
import { defineCustomElement as defineWppIconMobile } from '@wppopen/components-library/components/wpp-icon-mobile.js';
import { defineCustomElement as defineWppIconMoney } from '@wppopen/components-library/components/wpp-icon-money.js';
import { defineCustomElement as defineWppIconMore } from '@wppopen/components-library/components/wpp-icon-more.js';
import { defineCustomElement as defineWppIconMove } from '@wppopen/components-library/components/wpp-icon-move.js';
import { defineCustomElement as defineWppIconMovie } from '@wppopen/components-library/components/wpp-icon-movie.js';
import { defineCustomElement as defineWppIconMultipleEmotions } from '@wppopen/components-library/components/wpp-icon-multiple-emotions.js';
import { defineCustomElement as defineWppIconMusic } from '@wppopen/components-library/components/wpp-icon-music.js';
import { defineCustomElement as defineWppIconNavigationMenu } from '@wppopen/components-library/components/wpp-icon-navigation-menu.js';
import { defineCustomElement as defineWppIconNeutral } from '@wppopen/components-library/components/wpp-icon-neutral.js';
import { defineCustomElement as defineWppIconNeutralTrading } from '@wppopen/components-library/components/wpp-icon-neutral-trading.js';
import { defineCustomElement as defineWppIconNewspaper } from '@wppopen/components-library/components/wpp-icon-newspaper.js';
import { defineCustomElement as defineWppIconNext } from '@wppopen/components-library/components/wpp-icon-next.js';
import { defineCustomElement as defineWppIconNightLife } from '@wppopen/components-library/components/wpp-icon-night-life.js';
import { defineCustomElement as defineWppIconNote } from '@wppopen/components-library/components/wpp-icon-note.js';
import { defineCustomElement as defineWppIconNotificationNew } from '@wppopen/components-library/components/wpp-icon-notification-new.js';
import { defineCustomElement as defineWppIconNotificationPause } from '@wppopen/components-library/components/wpp-icon-notification-pause.js';
import { defineCustomElement as defineWppIconNuclearDanger } from '@wppopen/components-library/components/wpp-icon-nuclear-danger.js';
import { defineCustomElement as defineWppIconNumber } from '@wppopen/components-library/components/wpp-icon-number.js';
import { defineCustomElement as defineWppIconObjectAlignment } from '@wppopen/components-library/components/wpp-icon-object-alignment.js';
import { defineCustomElement as defineWppIconObjectAlignmentCenter } from '@wppopen/components-library/components/wpp-icon-object-alignment-center.js';
import { defineCustomElement as defineWppIconOrderedList } from '@wppopen/components-library/components/wpp-icon-ordered-list.js';
import { defineCustomElement as defineWppIconOrganization } from '@wppopen/components-library/components/wpp-icon-organization.js';
import { defineCustomElement as defineWppIconOrientation } from '@wppopen/components-library/components/wpp-icon-orientation.js';
import { defineCustomElement as defineWppIconOutdoor } from '@wppopen/components-library/components/wpp-icon-outdoor.js';
import { defineCustomElement as defineWppIconOutdoorMedia } from '@wppopen/components-library/components/wpp-icon-outdoor-media.js';
import { defineCustomElement as defineWppIconOwner } from '@wppopen/components-library/components/wpp-icon-owner.js';
import { defineCustomElement as defineWppIconPadding } from '@wppopen/components-library/components/wpp-icon-padding.js';
import { defineCustomElement as defineWppIconPair } from '@wppopen/components-library/components/wpp-icon-pair.js';
import { defineCustomElement as defineWppIconParking } from '@wppopen/components-library/components/wpp-icon-parking.js';
import { defineCustomElement as defineWppIconPaste } from '@wppopen/components-library/components/wpp-icon-paste.js';
import { defineCustomElement as defineWppIconPause } from '@wppopen/components-library/components/wpp-icon-pause.js';
import { defineCustomElement as defineWppIconPen } from '@wppopen/components-library/components/wpp-icon-pen.js';
import { defineCustomElement as defineWppIconPending } from '@wppopen/components-library/components/wpp-icon-pending.js';
import { defineCustomElement as defineWppIconPentagon } from '@wppopen/components-library/components/wpp-icon-pentagon.js';
import { defineCustomElement as defineWppIconPeople } from '@wppopen/components-library/components/wpp-icon-people.js';
import { defineCustomElement as defineWppIconPharmacy } from '@wppopen/components-library/components/wpp-icon-pharmacy.js';
import { defineCustomElement as defineWppIconPhone } from '@wppopen/components-library/components/wpp-icon-phone.js';
import { defineCustomElement as defineWppIconPieChart } from '@wppopen/components-library/components/wpp-icon-pie-chart.js';
import { defineCustomElement as defineWppIconPinned } from '@wppopen/components-library/components/wpp-icon-pinned.js';
import { defineCustomElement as defineWppIconPitch } from '@wppopen/components-library/components/wpp-icon-pitch.js';
import { defineCustomElement as defineWppIconPlay } from '@wppopen/components-library/components/wpp-icon-play.js';
import { defineCustomElement as defineWppIconPlus } from '@wppopen/components-library/components/wpp-icon-plus.js';
import { defineCustomElement as defineWppIconPlusCircle } from '@wppopen/components-library/components/wpp-icon-plus-circle.js';
import { defineCustomElement as defineWppIconPolice } from '@wppopen/components-library/components/wpp-icon-police.js';
import { defineCustomElement as defineWppIconPost } from '@wppopen/components-library/components/wpp-icon-post.js';
import { defineCustomElement as defineWppIconPound } from '@wppopen/components-library/components/wpp-icon-pound.js';
import { defineCustomElement as defineWppIconPremium } from '@wppopen/components-library/components/wpp-icon-premium.js';
import { defineCustomElement as defineWppIconPrevious } from '@wppopen/components-library/components/wpp-icon-previous.js';
import { defineCustomElement as defineWppIconPrint } from '@wppopen/components-library/components/wpp-icon-print.js';
import { defineCustomElement as defineWppIconPrivateAccount } from '@wppopen/components-library/components/wpp-icon-private-account.js';
import { defineCustomElement as defineWppIconQa } from '@wppopen/components-library/components/wpp-icon-qa.js';
import { defineCustomElement as defineWppIconQrCode } from '@wppopen/components-library/components/wpp-icon-qr-code.js';
import { defineCustomElement as defineWppIconRadio } from '@wppopen/components-library/components/wpp-icon-radio.js';
import { defineCustomElement as defineWppIconRanking } from '@wppopen/components-library/components/wpp-icon-ranking.js';
import { defineCustomElement as defineWppIconRatio } from '@wppopen/components-library/components/wpp-icon-ratio.js';
import { defineCustomElement as defineWppIconRecord } from '@wppopen/components-library/components/wpp-icon-record.js';
import { defineCustomElement as defineWppIconRecordStop } from '@wppopen/components-library/components/wpp-icon-record-stop.js';
import { defineCustomElement as defineWppIconRectangle } from '@wppopen/components-library/components/wpp-icon-rectangle.js';
import { defineCustomElement as defineWppIconRecycle } from '@wppopen/components-library/components/wpp-icon-recycle.js';
import { defineCustomElement as defineWppIconRedo } from '@wppopen/components-library/components/wpp-icon-redo.js';
import { defineCustomElement as defineWppIconRefresh } from '@wppopen/components-library/components/wpp-icon-refresh.js';
import { defineCustomElement as defineWppIconRefreshDashed } from '@wppopen/components-library/components/wpp-icon-refresh-dashed.js';
import { defineCustomElement as defineWppIconReject } from '@wppopen/components-library/components/wpp-icon-reject.js';
import { defineCustomElement as defineWppIconRemove } from '@wppopen/components-library/components/wpp-icon-remove.js';
import { defineCustomElement as defineWppIconRemoveApp } from '@wppopen/components-library/components/wpp-icon-remove-app.js';
import { defineCustomElement as defineWppIconRemoveCircle } from '@wppopen/components-library/components/wpp-icon-remove-circle.js';
import { defineCustomElement as defineWppIconRepeatOff } from '@wppopen/components-library/components/wpp-icon-repeat-off.js';
import { defineCustomElement as defineWppIconRepeatOn } from '@wppopen/components-library/components/wpp-icon-repeat-on.js';
import { defineCustomElement as defineWppIconReply } from '@wppopen/components-library/components/wpp-icon-reply.js';
import { defineCustomElement as defineWppIconReplyAll } from '@wppopen/components-library/components/wpp-icon-reply-all.js';
import { defineCustomElement as defineWppIconReset } from '@wppopen/components-library/components/wpp-icon-reset.js';
import { defineCustomElement as defineWppIconResetDashed } from '@wppopen/components-library/components/wpp-icon-reset-dashed.js';
import { defineCustomElement as defineWppIconResize } from '@wppopen/components-library/components/wpp-icon-resize.js';
import { defineCustomElement as defineWppIconResizeLarge } from '@wppopen/components-library/components/wpp-icon-resize-large.js';
import { defineCustomElement as defineWppIconResizeSmall } from '@wppopen/components-library/components/wpp-icon-resize-small.js';
import { defineCustomElement as defineWppIconRestaurant } from '@wppopen/components-library/components/wpp-icon-restaurant.js';
import { defineCustomElement as defineWppIconRhombus } from '@wppopen/components-library/components/wpp-icon-rhombus.js';
import { defineCustomElement as defineWppIconRotate } from '@wppopen/components-library/components/wpp-icon-rotate.js';
import { defineCustomElement as defineWppIconRotateClockwise } from '@wppopen/components-library/components/wpp-icon-rotate-clockwise.js';
import { defineCustomElement as defineWppIconRotateCounterclockwise } from '@wppopen/components-library/components/wpp-icon-rotate-counterclockwise.js';
import { defineCustomElement as defineWppIconRss } from '@wppopen/components-library/components/wpp-icon-rss.js';
import { defineCustomElement as defineWppIconRupee } from '@wppopen/components-library/components/wpp-icon-rupee.js';
import { defineCustomElement as defineWppIconSad } from '@wppopen/components-library/components/wpp-icon-sad.js';
import { defineCustomElement as defineWppIconSadSlightly } from '@wppopen/components-library/components/wpp-icon-sad-slightly.js';
import { defineCustomElement as defineWppIconScale } from '@wppopen/components-library/components/wpp-icon-scale.js';
import { defineCustomElement as defineWppIconScaleBottom } from '@wppopen/components-library/components/wpp-icon-scale-bottom.js';
import { defineCustomElement as defineWppIconScan } from '@wppopen/components-library/components/wpp-icon-scan.js';
import { defineCustomElement as defineWppIconSchool } from '@wppopen/components-library/components/wpp-icon-school.js';
import { defineCustomElement as defineWppIconSearch } from '@wppopen/components-library/components/wpp-icon-search.js';
import { defineCustomElement as defineWppIconSegmentedControl } from '@wppopen/components-library/components/wpp-icon-segmented-control.js';
import { defineCustomElement as defineWppIconSelectObject } from '@wppopen/components-library/components/wpp-icon-select-object.js';
import { defineCustomElement as defineWppIconSend } from '@wppopen/components-library/components/wpp-icon-send.js';
import { defineCustomElement as defineWppIconSendOff } from '@wppopen/components-library/components/wpp-icon-send-off.js';
import { defineCustomElement as defineWppIconService } from '@wppopen/components-library/components/wpp-icon-service.js';
import { defineCustomElement as defineWppIconShapes } from '@wppopen/components-library/components/wpp-icon-shapes.js';
import { defineCustomElement as defineWppIconShare } from '@wppopen/components-library/components/wpp-icon-share.js';
import { defineCustomElement as defineWppIconShield } from '@wppopen/components-library/components/wpp-icon-shield.js';
import { defineCustomElement as defineWppIconShieldDismiss } from '@wppopen/components-library/components/wpp-icon-shield-dismiss.js';
import { defineCustomElement as defineWppIconShieldError } from '@wppopen/components-library/components/wpp-icon-shield-error.js';
import { defineCustomElement as defineWppIconShieldSuccess } from '@wppopen/components-library/components/wpp-icon-shield-success.js';
import { defineCustomElement as defineWppIconShip } from '@wppopen/components-library/components/wpp-icon-ship.js';
import { defineCustomElement as defineWppIconShopping } from '@wppopen/components-library/components/wpp-icon-shopping.js';
import { defineCustomElement as defineWppIconShutDown } from '@wppopen/components-library/components/wpp-icon-shut-down.js';
import { defineCustomElement as defineWppIconSmartwatch } from '@wppopen/components-library/components/wpp-icon-smartwatch.js';
import { defineCustomElement as defineWppIconSmile } from '@wppopen/components-library/components/wpp-icon-smile.js';
import { defineCustomElement as defineWppIconSmileSlightly } from '@wppopen/components-library/components/wpp-icon-smile-slightly.js';
import { defineCustomElement as defineWppIconSocialMedia } from '@wppopen/components-library/components/wpp-icon-social-media.js';
import { defineCustomElement as defineWppIconSort } from '@wppopen/components-library/components/wpp-icon-sort.js';
import { defineCustomElement as defineWppIconSortDecrease } from '@wppopen/components-library/components/wpp-icon-sort-decrease.js';
import { defineCustomElement as defineWppIconSortIncrease } from '@wppopen/components-library/components/wpp-icon-sort-increase.js';
import { defineCustomElement as defineWppIconSparkle } from '@wppopen/components-library/components/wpp-icon-sparkle.js';
import { defineCustomElement as defineWppIconSpeaker } from '@wppopen/components-library/components/wpp-icon-speaker.js';
import { defineCustomElement as defineWppIconSpeakerBluetooth } from '@wppopen/components-library/components/wpp-icon-speaker-bluetooth.js';
import { defineCustomElement as defineWppIconSpeakerMute } from '@wppopen/components-library/components/wpp-icon-speaker-mute.js';
import { defineCustomElement as defineWppIconSpeakerOff } from '@wppopen/components-library/components/wpp-icon-speaker-off.js';
import { defineCustomElement as defineWppIconSplit } from '@wppopen/components-library/components/wpp-icon-split.js';
import { defineCustomElement as defineWppIconSport } from '@wppopen/components-library/components/wpp-icon-sport.js';
import { defineCustomElement as defineWppIconSpreadsheet } from '@wppopen/components-library/components/wpp-icon-spreadsheet.js';
import { defineCustomElement as defineWppIconSquare } from '@wppopen/components-library/components/wpp-icon-square.js';
import { defineCustomElement as defineWppIconSquareHint } from '@wppopen/components-library/components/wpp-icon-square-hint.js';
import { defineCustomElement as defineWppIconStatisticDocument } from '@wppopen/components-library/components/wpp-icon-statistic-document.js';
import { defineCustomElement as defineWppIconSticker } from '@wppopen/components-library/components/wpp-icon-sticker.js';
import { defineCustomElement as defineWppIconStop } from '@wppopen/components-library/components/wpp-icon-stop.js';
import { defineCustomElement as defineWppIconStrikeThrough } from '@wppopen/components-library/components/wpp-icon-strike-through.js';
import { defineCustomElement as defineWppIconStyleguide } from '@wppopen/components-library/components/wpp-icon-styleguide.js';
import { defineCustomElement as defineWppIconSubItems } from '@wppopen/components-library/components/wpp-icon-sub-items.js';
import { defineCustomElement as defineWppIconSubscribe } from '@wppopen/components-library/components/wpp-icon-subscribe.js';
import { defineCustomElement as defineWppIconSuccess } from '@wppopen/components-library/components/wpp-icon-success.js';
import { defineCustomElement as defineWppIconSupermarket } from '@wppopen/components-library/components/wpp-icon-supermarket.js';
import { defineCustomElement as defineWppIconSupport } from '@wppopen/components-library/components/wpp-icon-support.js';
import { defineCustomElement as defineWppIconSupportChat } from '@wppopen/components-library/components/wpp-icon-support-chat.js';
import { defineCustomElement as defineWppIconSurprise } from '@wppopen/components-library/components/wpp-icon-surprise.js';
import { defineCustomElement as defineWppIconSymbols } from '@wppopen/components-library/components/wpp-icon-symbols.js';
import { defineCustomElement as defineWppIconSync } from '@wppopen/components-library/components/wpp-icon-sync.js';
import { defineCustomElement as defineWppIconTableDefault } from '@wppopen/components-library/components/wpp-icon-table-default.js';
import { defineCustomElement as defineWppIconTableDismiss } from '@wppopen/components-library/components/wpp-icon-table-dismiss.js';
import { defineCustomElement as defineWppIconTableEdit } from '@wppopen/components-library/components/wpp-icon-table-edit.js';
import { defineCustomElement as defineWppIconTableLink } from '@wppopen/components-library/components/wpp-icon-table-link.js';
import { defineCustomElement as defineWppIconTableSimple } from '@wppopen/components-library/components/wpp-icon-table-simple.js';
import { defineCustomElement as defineWppIconTableSort } from '@wppopen/components-library/components/wpp-icon-table-sort.js';
import { defineCustomElement as defineWppIconTableSortAsc } from '@wppopen/components-library/components/wpp-icon-table-sort-asc.js';
import { defineCustomElement as defineWppIconTableSortAscHover } from '@wppopen/components-library/components/wpp-icon-table-sort-asc-hover.js';
import { defineCustomElement as defineWppIconTableSortAscPressed } from '@wppopen/components-library/components/wpp-icon-table-sort-asc-pressed.js';
import { defineCustomElement as defineWppIconTableSortDesc } from '@wppopen/components-library/components/wpp-icon-table-sort-desc.js';
import { defineCustomElement as defineWppIconTableSortDescHover } from '@wppopen/components-library/components/wpp-icon-table-sort-desc-hover.js';
import { defineCustomElement as defineWppIconTableSortDescPressed } from '@wppopen/components-library/components/wpp-icon-table-sort-desc-pressed.js';
import { defineCustomElement as defineWppIconTableSortHover } from '@wppopen/components-library/components/wpp-icon-table-sort-hover.js';
import { defineCustomElement as defineWppIconTableSortPressed } from '@wppopen/components-library/components/wpp-icon-table-sort-pressed.js';
import { defineCustomElement as defineWppIconTableSortWrapper } from '@wppopen/components-library/components/wpp-icon-table-sort-wrapper.js';
import { defineCustomElement as defineWppIconTablet } from '@wppopen/components-library/components/wpp-icon-tablet.js';
import { defineCustomElement as defineWppIconTag } from '@wppopen/components-library/components/wpp-icon-tag.js';
import { defineCustomElement as defineWppIconTarget } from '@wppopen/components-library/components/wpp-icon-target.js';
import { defineCustomElement as defineWppIconTaskList } from '@wppopen/components-library/components/wpp-icon-task-list.js';
import { defineCustomElement as defineWppIconTaskListSquare } from '@wppopen/components-library/components/wpp-icon-task-list-square.js';
import { defineCustomElement as defineWppIconText } from '@wppopen/components-library/components/wpp-icon-text.js';
import { defineCustomElement as defineWppIconTextAlignmentCenter } from '@wppopen/components-library/components/wpp-icon-text-alignment-center.js';
import { defineCustomElement as defineWppIconTextAlignmentDistribute } from '@wppopen/components-library/components/wpp-icon-text-alignment-distribute.js';
import { defineCustomElement as defineWppIconTextAlignmentDistributeVertical } from '@wppopen/components-library/components/wpp-icon-text-alignment-distribute-vertical.js';
import { defineCustomElement as defineWppIconTextAlignmentJustify } from '@wppopen/components-library/components/wpp-icon-text-alignment-justify.js';
import { defineCustomElement as defineWppIconTextAlignmentJustifyLow } from '@wppopen/components-library/components/wpp-icon-text-alignment-justify-low.js';
import { defineCustomElement as defineWppIconTextAlignmentLeft } from '@wppopen/components-library/components/wpp-icon-text-alignment-left.js';
import { defineCustomElement as defineWppIconTextAlignmentRight } from '@wppopen/components-library/components/wpp-icon-text-alignment-right.js';
import { defineCustomElement as defineWppIconTheatre } from '@wppopen/components-library/components/wpp-icon-theatre.js';
import { defineCustomElement as defineWppIconThumbsDown } from '@wppopen/components-library/components/wpp-icon-thumbs-down.js';
import { defineCustomElement as defineWppIconThumbsDownFilled } from '@wppopen/components-library/components/wpp-icon-thumbs-down-filled.js';
import { defineCustomElement as defineWppIconThumbsUp } from '@wppopen/components-library/components/wpp-icon-thumbs-up.js';
import { defineCustomElement as defineWppIconThumbsUpFilled } from '@wppopen/components-library/components/wpp-icon-thumbs-up-filled.js';
import { defineCustomElement as defineWppIconTick } from '@wppopen/components-library/components/wpp-icon-tick.js';
import { defineCustomElement as defineWppIconTourism } from '@wppopen/components-library/components/wpp-icon-tourism.js';
import { defineCustomElement as defineWppIconTrain } from '@wppopen/components-library/components/wpp-icon-train.js';
import { defineCustomElement as defineWppIconTranslate } from '@wppopen/components-library/components/wpp-icon-translate.js';
import { defineCustomElement as defineWppIconTrash } from '@wppopen/components-library/components/wpp-icon-trash.js';
import { defineCustomElement as defineWppIconTrendAscend } from '@wppopen/components-library/components/wpp-icon-trend-ascend.js';
import { defineCustomElement as defineWppIconTrendDescent } from '@wppopen/components-library/components/wpp-icon-trend-descent.js';
import { defineCustomElement as defineWppIconTriangle } from '@wppopen/components-library/components/wpp-icon-triangle.js';
import { defineCustomElement as defineWppIconTriangleFill } from '@wppopen/components-library/components/wpp-icon-triangle-fill.js';
import { defineCustomElement as defineWppIconTune } from '@wppopen/components-library/components/wpp-icon-tune.js';
import { defineCustomElement as defineWppIconTv } from '@wppopen/components-library/components/wpp-icon-tv.js';
import { defineCustomElement as defineWppIconTwentyFourHours } from '@wppopen/components-library/components/wpp-icon-twenty-four-hours.js';
import { defineCustomElement as defineWppIconUnderline } from '@wppopen/components-library/components/wpp-icon-underline.js';
import { defineCustomElement as defineWppIconUndo } from '@wppopen/components-library/components/wpp-icon-undo.js';
import { defineCustomElement as defineWppIconUnlink } from '@wppopen/components-library/components/wpp-icon-unlink.js';
import { defineCustomElement as defineWppIconUnorderedList } from '@wppopen/components-library/components/wpp-icon-unordered-list.js';
import { defineCustomElement as defineWppIconUnpinned } from '@wppopen/components-library/components/wpp-icon-unpinned.js';
import { defineCustomElement as defineWppIconUpload } from '@wppopen/components-library/components/wpp-icon-upload.js';
import { defineCustomElement as defineWppIconUser } from '@wppopen/components-library/components/wpp-icon-user.js';
import { defineCustomElement as defineWppIconUserAdd } from '@wppopen/components-library/components/wpp-icon-user-add.js';
import { defineCustomElement as defineWppIconUserBlock } from '@wppopen/components-library/components/wpp-icon-user-block.js';
import { defineCustomElement as defineWppIconUserChat } from '@wppopen/components-library/components/wpp-icon-user-chat.js';
import { defineCustomElement as defineWppIconUserSearch } from '@wppopen/components-library/components/wpp-icon-user-search.js';
import { defineCustomElement as defineWppIconUserStarred } from '@wppopen/components-library/components/wpp-icon-user-starred.js';
import { defineCustomElement as defineWppIconUserTag } from '@wppopen/components-library/components/wpp-icon-user-tag.js';
import { defineCustomElement as defineWppIconVideoBlocked } from '@wppopen/components-library/components/wpp-icon-video-blocked.js';
import { defineCustomElement as defineWppIconVideoClip } from '@wppopen/components-library/components/wpp-icon-video-clip.js';
import { defineCustomElement as defineWppIconVideoOff } from '@wppopen/components-library/components/wpp-icon-video-off.js';
import { defineCustomElement as defineWppIconVideoOn } from '@wppopen/components-library/components/wpp-icon-video-on.js';
import { defineCustomElement as defineWppIconVr } from '@wppopen/components-library/components/wpp-icon-vr.js';
import { defineCustomElement as defineWppIconWarning } from '@wppopen/components-library/components/wpp-icon-warning.js';
import { defineCustomElement as defineWppIconWifiOff } from '@wppopen/components-library/components/wpp-icon-wifi-off.js';
import { defineCustomElement as defineWppIconWifiOn } from '@wppopen/components-library/components/wpp-icon-wifi-on.js';
import { defineCustomElement as defineWppIconWifiWarning } from '@wppopen/components-library/components/wpp-icon-wifi-warning.js';
import { defineCustomElement as defineWppIconWithHand } from '@wppopen/components-library/components/wpp-icon-with-hand.js';
import { defineCustomElement as defineWppIconWorkshop } from '@wppopen/components-library/components/wpp-icon-workshop.js';
import { defineCustomElement as defineWppIconWrapOff } from '@wppopen/components-library/components/wpp-icon-wrap-off.js';
import { defineCustomElement as defineWppIconWrapOn } from '@wppopen/components-library/components/wpp-icon-wrap-on.js';
import { defineCustomElement as defineWppIconYen } from '@wppopen/components-library/components/wpp-icon-yen.js';
import { defineCustomElement as defineWppIconYuan } from '@wppopen/components-library/components/wpp-icon-yuan.js';
import { defineCustomElement as defineWppIconZoo } from '@wppopen/components-library/components/wpp-icon-zoo.js';
import { defineCustomElement as defineWppIconZoomIn } from '@wppopen/components-library/components/wpp-icon-zoom-in.js';
import { defineCustomElement as defineWppIconZoomOut } from '@wppopen/components-library/components/wpp-icon-zoom-out.js';
import { defineCustomElement as defineWppInlineEdit } from '@wppopen/components-library/components/wpp-inline-edit.js';
import { defineCustomElement as defineWppInlineMessage } from '@wppopen/components-library/components/wpp-inline-message.js';
import { defineCustomElement as defineWppInput } from '@wppopen/components-library/components/wpp-input.js';
import { defineCustomElement as defineWppInternalLabel } from '@wppopen/components-library/components/wpp-internal-label.js';
import { defineCustomElement as defineWppLabel } from '@wppopen/components-library/components/wpp-label.js';
import { defineCustomElement as defineWppLegend } from '@wppopen/components-library/components/wpp-legend.js';
import { defineCustomElement as defineWppListItem } from '@wppopen/components-library/components/wpp-list-item.js';
import { defineCustomElement as defineWppLoadMore } from '@wppopen/components-library/components/wpp-load-more.js';
import { defineCustomElement as defineWppMenuContext } from '@wppopen/components-library/components/wpp-menu-context.js';
import { defineCustomElement as defineWppMenuGroup } from '@wppopen/components-library/components/wpp-menu-group.js';
import { defineCustomElement as defineWppModal } from '@wppopen/components-library/components/wpp-modal.js';
import { defineCustomElement as defineWppMoreButton } from '@wppopen/components-library/components/wpp-more-button.js';
import { defineCustomElement as defineWppNavSidebar } from '@wppopen/components-library/components/wpp-nav-sidebar.js';
import { defineCustomElement as defineWppNavSidebarItem } from '@wppopen/components-library/components/wpp-nav-sidebar-item.js';
import { defineCustomElement as defineWppNavigationItem } from '@wppopen/components-library/components/wpp-navigation-item.js';
import { defineCustomElement as defineWppOverlay } from '@wppopen/components-library/components/wpp-overlay.js';
import { defineCustomElement as defineWppPagination } from '@wppopen/components-library/components/wpp-pagination.js';
import { defineCustomElement as defineWppPaginationItem } from '@wppopen/components-library/components/wpp-pagination-item.js';
import { defineCustomElement as defineWppPaginationSelect } from '@wppopen/components-library/components/wpp-pagination-select.js';
import { defineCustomElement as defineWppPill } from '@wppopen/components-library/components/wpp-pill.js';
import { defineCustomElement as defineWppPillGroup } from '@wppopen/components-library/components/wpp-pill-group.js';
import { defineCustomElement as defineWppPopover } from '@wppopen/components-library/components/wpp-popover.js';
import { defineCustomElement as defineWppProgressIndicator } from '@wppopen/components-library/components/wpp-progress-indicator.js';
import { defineCustomElement as defineWppQuillStyles } from '@wppopen/components-library/components/wpp-quill-styles.js';
import { defineCustomElement as defineWppRadio } from '@wppopen/components-library/components/wpp-radio.js';
import { defineCustomElement as defineWppRadioGroup } from '@wppopen/components-library/components/wpp-radio-group.js';
import { defineCustomElement as defineWppRichtext } from '@wppopen/components-library/components/wpp-richtext.js';
import { defineCustomElement as defineWppRichtextCommonStyles } from '@wppopen/components-library/components/wpp-richtext-common-styles.js';
import { defineCustomElement as defineWppRichtextHtml } from '@wppopen/components-library/components/wpp-richtext-html.js';
import { defineCustomElement as defineWppRichtextIconLoader } from '@wppopen/components-library/components/wpp-richtext-icon-loader.js';
import { defineCustomElement as defineWppRichtextMarkdown } from '@wppopen/components-library/components/wpp-richtext-markdown.js';
import { defineCustomElement as defineWppRichtextView } from '@wppopen/components-library/components/wpp-richtext-view.js';
import { defineCustomElement as defineWppSearch } from '@wppopen/components-library/components/wpp-search.js';
import { defineCustomElement as defineWppSegmentedControl } from '@wppopen/components-library/components/wpp-segmented-control.js';
import { defineCustomElement as defineWppSegmentedControlItem } from '@wppopen/components-library/components/wpp-segmented-control-item.js';
import { defineCustomElement as defineWppSelect } from '@wppopen/components-library/components/wpp-select.js';
import { defineCustomElement as defineWppSideModal } from '@wppopen/components-library/components/wpp-side-modal.js';
import { defineCustomElement as defineWppSkeleton } from '@wppopen/components-library/components/wpp-skeleton.js';
import { defineCustomElement as defineWppSlider } from '@wppopen/components-library/components/wpp-slider.js';
import { defineCustomElement as defineWppSortButton } from '@wppopen/components-library/components/wpp-sort-button.js';
import { defineCustomElement as defineWppSpinner } from '@wppopen/components-library/components/wpp-spinner.js';
import { defineCustomElement as defineWppStep } from '@wppopen/components-library/components/wpp-step.js';
import { defineCustomElement as defineWppStepper } from '@wppopen/components-library/components/wpp-stepper.js';
import { defineCustomElement as defineWppStickyBar } from '@wppopen/components-library/components/wpp-sticky-bar.js';
import { defineCustomElement as defineWppTab } from '@wppopen/components-library/components/wpp-tab.js';
import { defineCustomElement as defineWppTabs } from '@wppopen/components-library/components/wpp-tabs.js';
import { defineCustomElement as defineWppTag } from '@wppopen/components-library/components/wpp-tag.js';
import { defineCustomElement as defineWppTextareaInput } from '@wppopen/components-library/components/wpp-textarea-input.js';
import { defineCustomElement as defineWppTimePicker } from '@wppopen/components-library/components/wpp-time-picker.js';
import { defineCustomElement as defineWppToast } from '@wppopen/components-library/components/wpp-toast.js';
import { defineCustomElement as defineWppToastContainer } from '@wppopen/components-library/components/wpp-toast-container.js';
import { defineCustomElement as defineWppToggle } from '@wppopen/components-library/components/wpp-toggle.js';
import { defineCustomElement as defineWppTooltip } from '@wppopen/components-library/components/wpp-tooltip.js';
import { defineCustomElement as defineWppTopbar } from '@wppopen/components-library/components/wpp-topbar.js';
import { defineCustomElement as defineWppTopbarItem } from '@wppopen/components-library/components/wpp-topbar-item.js';
import { defineCustomElement as defineWppTree } from '@wppopen/components-library/components/wpp-tree.js';
import { defineCustomElement as defineWppTreeItem } from '@wppopen/components-library/components/wpp-tree-item.js';
import { defineCustomElement as defineWppTypography } from '@wppopen/components-library/components/wpp-typography.js';
import { defineCustomElement as defineWppVideoPlayer } from '@wppopen/components-library/components/wpp-video-player.js';
export const WppAccordion = defineContainer('wpp-accordion-v4-1-0', defineWppAccordion, [
    'expandedByDefault',
    'expanded',
    'disabled',
    'withDivider',
    'size',
    'withTag',
    'ariaProps',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppActionButton = defineContainer('wpp-action-button-v4-1-0', defineWppActionButton, [
    'disabled',
    'loading',
    'variant',
    'autoFocus',
    'name',
    'form',
    'type',
    'value',
    'ariaProps'
]);
export const WppArtefact = defineContainer('wpp-artefact-v4-1-0', defineWppArtefact, [
    'size',
    'artefactTitle',
    'actions',
    'withPinAction',
    'pinActionPosition',
    'locales',
    'titleIcon',
    'isSelected',
    'ariaProps',
    'wppActionClick'
]);
export const WppAutocomplete = defineContainer('wpp-autocomplete-v4-1-0', defineWppAutocomplete, [
    'labelConfig',
    'name',
    'autoFocus',
    'disabled',
    'required',
    'loading',
    'infinite',
    'infiniteLastPage',
    'loadMore',
    'labelTooltipConfig',
    'placeholder',
    'size',
    'multiple',
    'type',
    'message',
    'messageType',
    'maxMessageLength',
    'simpleSearch',
    'persistentSearch',
    'showCreateNewElement',
    'displayBtnWhenListEmpty',
    'dropdownConfig',
    'pillTooltipConfig',
    'dropdownWidth',
    'list',
    'suggestions',
    'value',
    'limitSelectedItems',
    'locales',
    'getItemKey',
    'ariaProps',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppSearchValueChange',
    'wppCreateNewOption'
]);
export const WppAvatar = defineContainer('wpp-avatar-v4-1-0', defineWppAvatar, [
    'name',
    'size',
    'variant',
    'src',
    'icon',
    'color',
    'amountOfHiddenAvatars',
    'withTooltip',
    'interactable',
    'index',
    'role',
    'ariaProps',
    'tooltipConfig',
    'wppClick'
]);
export const WppAvatarGroup = defineContainer('wpp-avatar-group-v4-1-0', defineWppAvatarGroup, [
    'avatars',
    'maxAvatarsToDisplay',
    'size',
    'variant',
    'withTooltip',
    'tooltipConfig',
    'dropdownConfig',
    'avatarsIndex',
    'wppSelectItem'
]);
export const WppBackToTopButton = defineContainer('wpp-back-to-top-button-v4-1-0', defineWppBackToTopButton, [
    'ariaProps'
]);
export const WppBanner = defineContainer('wpp-banner-v4-1-0', defineWppBanner, [
    'ariaProps',
    'role',
    'show',
    'closable',
    'type',
    'zIndex',
    'wppClose'
]);
export const WppBasicNode = defineContainer('wpp-basic-node-v4-1-0', defineWppBasicNode, [
    'nodeTitle',
    'isLoading',
    'actions',
    'locales',
    'isSelected',
    'ariaProps',
    'wppActionClick'
]);
export const WppBreadcrumb = defineContainer('wpp-breadcrumb-v4-1-0', defineWppBreadcrumb, [
    'items',
    'maxLabelLength',
    'middleTruncation',
    'nativeLink',
    'dropdownConfig',
    'backBtnLabel',
    'wppChange'
]);
export const WppButton = defineContainer('wpp-button-v4-1-0', defineWppButton, [
    'size',
    'disabled',
    'loading',
    'variant',
    'inverted',
    'autoFocus',
    'name',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value',
    'ariaProps',
    'wppBlur',
    'wppFocus'
]);
export const WppCard = defineContainer('wpp-card-v4-1-0', defineWppCard, [
    'variant',
    'value',
    'size',
    'type',
    'disabled',
    'checked',
    'nested',
    'index',
    'withRadioOrCheckbox',
    'name',
    'interactive',
    'background',
    'ariaProps',
    'wppClick',
    'wppFocus',
    'wppBlur'
]);
export const WppCardGroup = defineContainer('wpp-card-group-v4-1-0', defineWppCardGroup, [
    'name',
    'size',
    'value',
    'multiple',
    'required',
    'withRadioOrCheckbox',
    'allowEmptySelection',
    'ariaProps',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppChatConversation = defineContainer('wpp-chat-conversation-v4-1-0', defineWppChatConversation, [
    'messages',
    'assistantAvatarConfig',
    'userAvatarConfig',
    'chatInputConfig',
    'wppSend',
    'wppChange',
    'wppMessageChanged',
    'wppActionsMenuToggle',
    'wppActionsMenuItemClick'
]);
export const WppChatConversationMessage = defineContainer('wpp-chat-conversation-message-v4-1-0', defineWppChatConversationMessage, [
    'role',
    'content',
    'status',
    'actionButtonsConfig',
    'menuContextListItems',
    'sourcesActionConfig',
    'assistantAvatarConfig',
    'userAvatarConfig',
    'attachments'
]);
export const WppChatInput = defineContainer('wpp-chat-input-v4-1-0', defineWppChatInput, [
    'size',
    'placeholder',
    'enableAttach',
    'enableMic',
    'disabled',
    'fileUploadConfig',
    'charactersLimit',
    'attachments',
    'withSelect',
    'actions',
    'textValue',
    'debounceEnabled',
    'debounceDelay',
    'zIndex',
    'textareaAriaLabel',
    'textareaId',
    'textareaName',
    'htmlAttributes',
    'ariaProps',
    'locales',
    'wppSend',
    'wppMic',
    'wppChange',
    'wppFileUploadItemDelete',
    'wppFileUploadItemClick',
    'wppMessageChanged',
    'wppActionsMenuToggle',
    'wppActionsMenuItemClick'
]);
export const WppChatNode = defineContainer('wpp-chat-node-v4-1-0', defineWppChatNode, [
    'nodeTitle',
    'titleIcon',
    'isLoading',
    'isSelected',
    'size',
    'userAvatarConfig',
    'assistantAvatarConfig',
    'actions',
    'models',
    'messageActions',
    'selectedModelId',
    'locales',
    'wppSend',
    'wppStop',
    'wppAttach',
    'wppActionClick',
    'wppModelSelect',
    'wppMessageActionClick'
]);
export const WppCheckbox = defineContainer('wpp-checkbox-v4-1-0', defineWppCheckbox, [
    'name',
    'value',
    'checked',
    'controlled',
    'indeterminate',
    'labelTooltipConfig',
    'required',
    'disabled',
    'autoFocus',
    'message',
    'messageType',
    'maxMessageLength',
    'ariaProps',
    'labelConfig',
    'internalState',
    'index',
    'decorative',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppClickCheckbox'
]);
export const WppCheckboxGroup = defineContainer('wpp-checkbox-group-v4-1-0', defineWppCheckboxGroup, [
    'value',
    'required',
    'message',
    'messageType',
    'direction',
    'maxMessageLength',
    'labelConfig',
    'labelTooltipConfig',
    'ariaProps',
    'gap',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppColorPicker = defineContainer('wpp-color-picker-v4-1-0', defineWppColorPicker, [
    'initialColor',
    'dropdownConfig',
    'type',
    'mode',
    'hexOpacity',
    'savedColors',
    'themeColors',
    'disabled',
    'wppSaveColor',
    'wppRemoveSavedColor',
    'wppFocus',
    'wppBlur',
    'wppChange'
]);
export const WppCounter = defineContainer('wpp-counter-v4-1-0', defineWppCounter, [
    'name',
    'value',
    'min',
    'max',
    'withButtons',
    'required',
    'disabled',
    'autoFocus',
    'size',
    'message',
    'messageType',
    'maxMessageLength',
    'ariaProps',
    'format',
    'labelTooltipConfig',
    'tooltipConfig',
    'labelConfig',
    'step',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppDatepicker = defineContainer('wpp-datepicker-v4-1-0', defineWppDatepicker, [
    'range',
    'toggleSelected',
    'value',
    'autoFocus',
    'static',
    'minDate',
    'maxDate',
    'placeholder',
    'view',
    'monthRangeNormalization',
    'yearRangeNormalization',
    'message',
    'messageType',
    'tooltipConfig',
    'maxMessageLength',
    'required',
    'disabled',
    'name',
    'size',
    'width',
    'presets',
    'labelTooltipConfig',
    'locales',
    'labelConfig',
    'appendToListWrapper',
    'dropdownConfig',
    'reverseLayout',
    'wppChange',
    'wppBlur',
    'wppFocus',
    'wppDateClear'
]);
export const WppDivider = defineContainer('wpp-divider-v4-1-0', defineWppDivider, [
    'vertical',
    'resizable'
]);
export const WppEmpty404 = defineContainer('wpp-empty-404-v4-1-0', defineWppEmpty404, [
    'width',
    'height'
]);
export const WppEmptyCards = defineContainer('wpp-empty-cards-v4-1-0', defineWppEmptyCards, [
    'width',
    'height'
]);
export const WppEmptyContent = defineContainer('wpp-empty-content-v4-1-0', defineWppEmptyContent, [
    'width',
    'height'
]);
export const WppEmptyDataviz = defineContainer('wpp-empty-dataviz-v4-1-0', defineWppEmptyDataviz, [
    'width',
    'height'
]);
export const WppEmptyDowntime = defineContainer('wpp-empty-downtime-v4-1-0', defineWppEmptyDowntime, [
    'width',
    'height'
]);
export const WppEmptyError = defineContainer('wpp-empty-error-v4-1-0', defineWppEmptyError, [
    'width',
    'height'
]);
export const WppEmptyFolder = defineContainer('wpp-empty-folder-v4-1-0', defineWppEmptyFolder, [
    'width',
    'height'
]);
export const WppEmptyNoAccess = defineContainer('wpp-empty-no-access-v4-1-0', defineWppEmptyNoAccess, [
    'width',
    'height'
]);
export const WppEmptyNoConnection = defineContainer('wpp-empty-no-connection-v4-1-0', defineWppEmptyNoConnection, [
    'width',
    'height'
]);
export const WppEmptyNothingFound = defineContainer('wpp-empty-nothing-found-v4-1-0', defineWppEmptyNothingFound, [
    'width',
    'height'
]);
export const WppEmptyNotifications = defineContainer('wpp-empty-notifications-v4-1-0', defineWppEmptyNotifications, [
    'width',
    'height'
]);
export const WppEmptyTable = defineContainer('wpp-empty-table-v4-1-0', defineWppEmptyTable, [
    'width',
    'height'
]);
export const WppExpandableCard = defineContainer('wpp-expandable-card-v4-1-0', defineWppExpandableCard, [
    'expandedByDefault',
    'isExpanded',
    'size',
    'variant',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppFileUpload = defineContainer('wpp-file-upload-v4-1-0', defineWppFileUpload, [
    'name',
    'value',
    'disabled',
    'multiple',
    'format',
    'acceptConfig',
    'messageType',
    'message',
    'maxMessageLength',
    'tooltipConfig',
    'size',
    'locales',
    'validator',
    'controlled',
    'maxFiles',
    'required',
    'labelConfig',
    'labelTooltipConfig',
    'showOnlyNewErrors',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppFileUploadItemDelete',
    'wppFileUploadItemClick',
    'wppError'
]);
export const WppFileUploadItem = defineContainer('wpp-file-upload-item-v4-1-0', defineWppFileUploadItem, [
    'fileName',
    'file',
    'format',
    'currentIndex',
    'locales',
    'uploaded',
    'parentDisabled',
    'wppDelete',
    'wppClick',
    'fileLoaded'
]);
export const WppFilterButton = defineContainer('wpp-filter-button-v4-1-0', defineWppFilterButton, [
    'counter',
    'name',
    'ariaProps',
    'disabled',
    'autoFocus'
]);
export const WppFloatingButton = defineContainer('wpp-floating-button-v4-1-0', defineWppFloatingButton, [
    'disabled',
    'loading',
    'autoFocus',
    'name',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value',
    'ariaProps'
]);
export const WppFloatingToolbar = defineContainer('wpp-floating-toolbar-v4-1-0', defineWppFloatingToolbar, [
    'actionButtonsConfig',
    'orientation',
    'ariaProps'
]);
export const WppFullScreenModal = defineContainer('wpp-full-screen-modal-v4-1-0', defineWppFullScreenModal, [
    'open',
    'withTransparentOverlay',
    'disableOutsideClick',
    'formConfig',
    'zIndex',
    'osBarCompatible',
    'ariaProps',
    'wppFullScreenModalClose',
    'wppFullScreenModalOpenStart',
    'wppFullScreenModalOpenComplete',
    'wppFullScreenModalCloseStart',
    'wppFullScreenModalCloseComplete'
]);
export const WppGrid = defineContainer('wpp-grid-v4-1-0', defineWppGrid, [
    'container',
    'item',
    'direction',
    'justifyContent',
    'alignItems',
    'columnSpacing',
    'rowSpacing',
    'all',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'fullWidth',
    'fullHeight',
    'fluid'
]);
export const WppHandle = defineContainer('wpp-handle-v4-1-0', defineWppHandle, [
    'type',
    'isSelected',
    'isLoading',
    'color'
]);
export const WppIconAbout = defineContainer('wpp-icon-about-v4-1-0', defineWppIconAbout, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAccessibility = defineContainer('wpp-icon-accessibility-v4-1-0', defineWppIconAccessibility, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAccordion = defineContainer('wpp-icon-accordion-v4-1-0', defineWppIconAccordion, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAction = defineContainer('wpp-icon-action-v4-1-0', defineWppIconAction, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAdd = defineContainer('wpp-icon-add-v4-1-0', defineWppIconAdd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAddApp = defineContainer('wpp-icon-add-app-v4-1-0', defineWppIconAddApp, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAddCircle = defineContainer('wpp-icon-add-circle-v4-1-0', defineWppIconAddCircle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAddDocument = defineContainer('wpp-icon-add-document-v4-1-0', defineWppIconAddDocument, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAddFolder = defineContainer('wpp-icon-add-folder-v4-1-0', defineWppIconAddFolder, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAdmin = defineContainer('wpp-icon-admin-v4-1-0', defineWppIconAdmin, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAi = defineContainer('wpp-icon-ai-v4-1-0', defineWppIconAi, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAirPollution = defineContainer('wpp-icon-air-pollution-v4-1-0', defineWppIconAirPollution, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAirplane = defineContainer('wpp-icon-airplane-v4-1-0', defineWppIconAirplane, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAngry = defineContainer('wpp-icon-angry-v4-1-0', defineWppIconAngry, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconApp = defineContainer('wpp-icon-app-v4-1-0', defineWppIconApp, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAppFolder = defineContainer('wpp-icon-app-folder-v4-1-0', defineWppIconAppFolder, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAppStore = defineContainer('wpp-icon-app-store-v4-1-0', defineWppIconAppStore, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconApprovals = defineContainer('wpp-icon-approvals-v4-1-0', defineWppIconApprovals, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconArchive = defineContainer('wpp-icon-archive-v4-1-0', defineWppIconArchive, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconArchiveMultiple = defineContainer('wpp-icon-archive-multiple-v4-1-0', defineWppIconArchiveMultiple, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconArrow = defineContainer('wpp-icon-arrow-v4-1-0', defineWppIconArrow, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconAsk = defineContainer('wpp-icon-ask-v4-1-0', defineWppIconAsk, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAssistant = defineContainer('wpp-icon-assistant-v4-1-0', defineWppIconAssistant, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAtm = defineContainer('wpp-icon-atm-v4-1-0', defineWppIconAtm, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAttach = defineContainer('wpp-icon-attach-v4-1-0', defineWppIconAttach, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAutoSum = defineContainer('wpp-icon-auto-sum-v4-1-0', defineWppIconAutoSum, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAutofit = defineContainer('wpp-icon-autofit-v4-1-0', defineWppIconAutofit, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconAutofitHeight = defineContainer('wpp-icon-autofit-height-v4-1-0', defineWppIconAutofitHeight, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAutofitHeightDotted = defineContainer('wpp-icon-autofit-height-dotted-v4-1-0', defineWppIconAutofitHeightDotted, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAutofitWidth = defineContainer('wpp-icon-autofit-width-v4-1-0', defineWppIconAutofitWidth, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAutofitWidthDotted = defineContainer('wpp-icon-autofit-width-dotted-v4-1-0', defineWppIconAutofitWidthDotted, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAvailableCheckmark = defineContainer('wpp-icon-available-checkmark-v4-1-0', defineWppIconAvailableCheckmark, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconAvailableUpdate = defineContainer('wpp-icon-available-update-v4-1-0', defineWppIconAvailableUpdate, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBank = defineContainer('wpp-icon-bank-v4-1-0', defineWppIconBank, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBar = defineContainer('wpp-icon-bar-v4-1-0', defineWppIconBar, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBarChart = defineContainer('wpp-icon-bar-chart-v4-1-0', defineWppIconBarChart, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBarHorizontal = defineContainer('wpp-icon-bar-horizontal-v4-1-0', defineWppIconBarHorizontal, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBicycle = defineContainer('wpp-icon-bicycle-v4-1-0', defineWppIconBicycle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBlockquote = defineContainer('wpp-icon-blockquote-v4-1-0', defineWppIconBlockquote, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBluetoothOff = defineContainer('wpp-icon-bluetooth-off-v4-1-0', defineWppIconBluetoothOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBluetoothOn = defineContainer('wpp-icon-bluetooth-on-v4-1-0', defineWppIconBluetoothOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBoard = defineContainer('wpp-icon-board-v4-1-0', defineWppIconBoard, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBold = defineContainer('wpp-icon-bold-v4-1-0', defineWppIconBold, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBook = defineContainer('wpp-icon-book-v4-1-0', defineWppIconBook, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookContacts = defineContainer('wpp-icon-book-contacts-v4-1-0', defineWppIconBookContacts, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookFaq = defineContainer('wpp-icon-book-faq-v4-1-0', defineWppIconBookFaq, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookInformation = defineContainer('wpp-icon-book-information-v4-1-0', defineWppIconBookInformation, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookSearch = defineContainer('wpp-icon-book-search-v4-1-0', defineWppIconBookSearch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookmark = defineContainer('wpp-icon-bookmark-v4-1-0', defineWppIconBookmark, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookmarkAdd = defineContainer('wpp-icon-bookmark-add-v4-1-0', defineWppIconBookmarkAdd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBookmarkSelected = defineContainer('wpp-icon-bookmark-selected-v4-1-0', defineWppIconBookmarkSelected, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorder = defineContainer('wpp-icon-border-v4-1-0', defineWppIconBorder, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconBorderAll = defineContainer('wpp-icon-border-all-v4-1-0', defineWppIconBorderAll, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderBottomDouble = defineContainer('wpp-icon-border-bottom-double-v4-1-0', defineWppIconBorderBottomDouble, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderLeftRight = defineContainer('wpp-icon-border-left-right-v4-1-0', defineWppIconBorderLeftRight, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderNone = defineContainer('wpp-icon-border-none-v4-1-0', defineWppIconBorderNone, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderOutside = defineContainer('wpp-icon-border-outside-v4-1-0', defineWppIconBorderOutside, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderOutsideThick = defineContainer('wpp-icon-border-outside-thick-v4-1-0', defineWppIconBorderOutsideThick, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderTopBottom = defineContainer('wpp-icon-border-top-bottom-v4-1-0', defineWppIconBorderTopBottom, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderTopBottomDouble = defineContainer('wpp-icon-border-top-bottom-double-v4-1-0', defineWppIconBorderTopBottomDouble, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBorderTopBottomThick = defineContainer('wpp-icon-border-top-bottom-thick-v4-1-0', defineWppIconBorderTopBottomThick, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBot = defineContainer('wpp-icon-bot-v4-1-0', defineWppIconBot, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBounce = defineContainer('wpp-icon-bounce-v4-1-0', defineWppIconBounce, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBranch = defineContainer('wpp-icon-branch-v4-1-0', defineWppIconBranch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBranchRequest = defineContainer('wpp-icon-branch-request-v4-1-0', defineWppIconBranchRequest, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBranchReview = defineContainer('wpp-icon-branch-review-v4-1-0', defineWppIconBranchReview, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBtc = defineContainer('wpp-icon-btc-v4-1-0', defineWppIconBtc, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBus = defineContainer('wpp-icon-bus-v4-1-0', defineWppIconBus, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconBusiness = defineContainer('wpp-icon-business-v4-1-0', defineWppIconBusiness, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCafe = defineContainer('wpp-icon-cafe-v4-1-0', defineWppIconCafe, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendar = defineContainer('wpp-icon-calendar-v4-1-0', defineWppIconCalendar, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendar3Days = defineContainer('wpp-icon-calendar-3-days-v4-1-0', defineWppIconCalendar3Days, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendarAdd = defineContainer('wpp-icon-calendar-add-v4-1-0', defineWppIconCalendarAdd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendarDate = defineContainer('wpp-icon-calendar-date-v4-1-0', defineWppIconCalendarDate, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendarDismiss = defineContainer('wpp-icon-calendar-dismiss-v4-1-0', defineWppIconCalendarDismiss, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendarError = defineContainer('wpp-icon-calendar-error-v4-1-0', defineWppIconCalendarError, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCalendarMonth = defineContainer('wpp-icon-calendar-month-v4-1-0', defineWppIconCalendarMonth, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCameraAdd = defineContainer('wpp-icon-camera-add-v4-1-0', defineWppIconCameraAdd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCameraOff = defineContainer('wpp-icon-camera-off-v4-1-0', defineWppIconCameraOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCameraOn = defineContainer('wpp-icon-camera-on-v4-1-0', defineWppIconCameraOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCameraSwitch = defineContainer('wpp-icon-camera-switch-v4-1-0', defineWppIconCameraSwitch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCampaign = defineContainer('wpp-icon-campaign-v4-1-0', defineWppIconCampaign, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCaptionOff = defineContainer('wpp-icon-caption-off-v4-1-0', defineWppIconCaptionOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCaptionOn = defineContainer('wpp-icon-caption-on-v4-1-0', defineWppIconCaptionOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCarousel = defineContainer('wpp-icon-carousel-v4-1-0', defineWppIconCarousel, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCart = defineContainer('wpp-icon-cart-v4-1-0', defineWppIconCart, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCase = defineContainer('wpp-icon-case-v4-1-0', defineWppIconCase, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCast = defineContainer('wpp-icon-cast-v4-1-0', defineWppIconCast, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCellularData3g = defineContainer('wpp-icon-cellular-data-3g-v4-1-0', defineWppIconCellularData3g, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCellularData4g = defineContainer('wpp-icon-cellular-data-4g-v4-1-0', defineWppIconCellularData4g, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCellularData5g = defineContainer('wpp-icon-cellular-data-5g-v4-1-0', defineWppIconCellularData5g, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCellularDataOff = defineContainer('wpp-icon-cellular-data-off-v4-1-0', defineWppIconCellularDataOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCellularDataOn = defineContainer('wpp-icon-cellular-data-on-v4-1-0', defineWppIconCellularDataOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconChannel = defineContainer('wpp-icon-channel-v4-1-0', defineWppIconChannel, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconChatMessage = defineContainer('wpp-icon-chat-message-v4-1-0', defineWppIconChatMessage, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconChatMessageNew = defineContainer('wpp-icon-chat-message-new-v4-1-0', defineWppIconChatMessageNew, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconChatMessageOff = defineContainer('wpp-icon-chat-message-off-v4-1-0', defineWppIconChatMessageOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconChatVideo = defineContainer('wpp-icon-chat-video-v4-1-0', defineWppIconChatVideo, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconChevron = defineContainer('wpp-icon-chevron-v4-1-0', defineWppIconChevron, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconCinema = defineContainer('wpp-icon-cinema-v4-1-0', defineWppIconCinema, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCircle = defineContainer('wpp-icon-circle-v4-1-0', defineWppIconCircle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconClock = defineContainer('wpp-icon-clock-v4-1-0', defineWppIconClock, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconClose = defineContainer('wpp-icon-close-v4-1-0', defineWppIconClose, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCloudDismiss = defineContainer('wpp-icon-cloud-dismiss-v4-1-0', defineWppIconCloudDismiss, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCloudSuccess = defineContainer('wpp-icon-cloud-success-v4-1-0', defineWppIconCloudSuccess, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCloudSync = defineContainer('wpp-icon-cloud-sync-v4-1-0', defineWppIconCloudSync, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCloudUpload = defineContainer('wpp-icon-cloud-upload-v4-1-0', defineWppIconCloudUpload, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCodeView = defineContainer('wpp-icon-code-view-v4-1-0', defineWppIconCodeView, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCollapse = defineContainer('wpp-icon-collapse-v4-1-0', defineWppIconCollapse, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCollection = defineContainer('wpp-icon-collection-v4-1-0', defineWppIconCollection, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconColour = defineContainer('wpp-icon-colour-v4-1-0', defineWppIconColour, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconColumnsOne = defineContainer('wpp-icon-columns-one-v4-1-0', defineWppIconColumnsOne, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconColumnsThree = defineContainer('wpp-icon-columns-three-v4-1-0', defineWppIconColumnsThree, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconColumnsTwo = defineContainer('wpp-icon-columns-two-v4-1-0', defineWppIconColumnsTwo, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconComment = defineContainer('wpp-icon-comment-v4-1-0', defineWppIconComment, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCommentOff = defineContainer('wpp-icon-comment-off-v4-1-0', defineWppIconCommentOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCommunication = defineContainer('wpp-icon-communication-v4-1-0', defineWppIconCommunication, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCompose = defineContainer('wpp-icon-compose-v4-1-0', defineWppIconCompose, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCookies = defineContainer('wpp-icon-cookies-v4-1-0', defineWppIconCookies, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCopy = defineContainer('wpp-icon-copy-v4-1-0', defineWppIconCopy, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCrop = defineContainer('wpp-icon-crop-v4-1-0', defineWppIconCrop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCross = defineContainer('wpp-icon-cross-v4-1-0', defineWppIconCross, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCta = defineContainer('wpp-icon-cta-v4-1-0', defineWppIconCta, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCube = defineContainer('wpp-icon-cube-v4-1-0', defineWppIconCube, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCurrency = defineContainer('wpp-icon-currency-v4-1-0', defineWppIconCurrency, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconCut = defineContainer('wpp-icon-cut-v4-1-0', defineWppIconCut, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDarkTheme = defineContainer('wpp-icon-dark-theme-v4-1-0', defineWppIconDarkTheme, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDash = defineContainer('wpp-icon-dash-v4-1-0', defineWppIconDash, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataArea = defineContainer('wpp-icon-data-area-v4-1-0', defineWppIconDataArea, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataCloudOff = defineContainer('wpp-icon-data-cloud-off-v4-1-0', defineWppIconDataCloudOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataCloudOn = defineContainer('wpp-icon-data-cloud-on-v4-1-0', defineWppIconDataCloudOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataFunnel = defineContainer('wpp-icon-data-funnel-v4-1-0', defineWppIconDataFunnel, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataHistogram = defineContainer('wpp-icon-data-histogram-v4-1-0', defineWppIconDataHistogram, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataLine = defineContainer('wpp-icon-data-line-v4-1-0', defineWppIconDataLine, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataScatter = defineContainer('wpp-icon-data-scatter-v4-1-0', defineWppIconDataScatter, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataSunburst = defineContainer('wpp-icon-data-sunburst-v4-1-0', defineWppIconDataSunburst, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataTransfer = defineContainer('wpp-icon-data-transfer-v4-1-0', defineWppIconDataTransfer, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataTreemap = defineContainer('wpp-icon-data-treemap-v4-1-0', defineWppIconDataTreemap, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataTrending = defineContainer('wpp-icon-data-trending-v4-1-0', defineWppIconDataTrending, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataUsage = defineContainer('wpp-icon-data-usage-v4-1-0', defineWppIconDataUsage, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataViewCards = defineContainer('wpp-icon-data-view-cards-v4-1-0', defineWppIconDataViewCards, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataViewList = defineContainer('wpp-icon-data-view-list-v4-1-0', defineWppIconDataViewList, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataWaterfall = defineContainer('wpp-icon-data-waterfall-v4-1-0', defineWppIconDataWaterfall, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDataWhisker = defineContainer('wpp-icon-data-whisker-v4-1-0', defineWppIconDataWhisker, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDatabase = defineContainer('wpp-icon-database-v4-1-0', defineWppIconDatabase, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDecrease = defineContainer('wpp-icon-decrease-v4-1-0', defineWppIconDecrease, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDesign = defineContainer('wpp-icon-design-v4-1-0', defineWppIconDesign, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDesktop = defineContainer('wpp-icon-desktop-v4-1-0', defineWppIconDesktop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDiamond = defineContainer('wpp-icon-diamond-v4-1-0', defineWppIconDiamond, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDirections = defineContainer('wpp-icon-directions-v4-1-0', defineWppIconDirections, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconDiversity = defineContainer('wpp-icon-diversity-v4-1-0', defineWppIconDiversity, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDocument = defineContainer('wpp-icon-document-v4-1-0', defineWppIconDocument, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDocumentBlocked = defineContainer('wpp-icon-document-blocked-v4-1-0', defineWppIconDocumentBlocked, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDocumentError = defineContainer('wpp-icon-document-error-v4-1-0', defineWppIconDocumentError, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDollar = defineContainer('wpp-icon-dollar-v4-1-0', defineWppIconDollar, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDone = defineContainer('wpp-icon-done-v4-1-0', defineWppIconDone, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDoubleChevron = defineContainer('wpp-icon-double-chevron-v4-1-0', defineWppIconDoubleChevron, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconDownload = defineContainer('wpp-icon-download-v4-1-0', defineWppIconDownload, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDraft = defineContainer('wpp-icon-draft-v4-1-0', defineWppIconDraft, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDrag = defineContainer('wpp-icon-drag-v4-1-0', defineWppIconDrag, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconDragAndDrop = defineContainer('wpp-icon-drag-and-drop-v4-1-0', defineWppIconDragAndDrop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEco = defineContainer('wpp-icon-eco-v4-1-0', defineWppIconEco, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEdit = defineContainer('wpp-icon-edit-v4-1-0', defineWppIconEdit, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEditText = defineContainer('wpp-icon-edit-text-v4-1-0', defineWppIconEditText, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEditorLowercase = defineContainer('wpp-icon-editor-lowercase-v4-1-0', defineWppIconEditorLowercase, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEditorObjectAlignmentCenter = defineContainer('wpp-icon-editor-object-alignment-center-v4-1-0', defineWppIconEditorObjectAlignmentCenter, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEditorTitle = defineContainer('wpp-icon-editor-title-v4-1-0', defineWppIconEditorTitle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEditorUppercase = defineContainer('wpp-icon-editor-uppercase-v4-1-0', defineWppIconEditorUppercase, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEffects = defineContainer('wpp-icon-effects-v4-1-0', defineWppIconEffects, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEnlarge = defineContainer('wpp-icon-enlarge-v4-1-0', defineWppIconEnlarge, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEnter = defineContainer('wpp-icon-enter-v4-1-0', defineWppIconEnter, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEraser = defineContainer('wpp-icon-eraser-v4-1-0', defineWppIconEraser, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconError = defineContainer('wpp-icon-error-v4-1-0', defineWppIconError, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEth = defineContainer('wpp-icon-eth-v4-1-0', defineWppIconEth, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEuro = defineContainer('wpp-icon-euro-v4-1-0', defineWppIconEuro, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEvent = defineContainer('wpp-icon-event-v4-1-0', defineWppIconEvent, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconExpand = defineContainer('wpp-icon-expand-v4-1-0', defineWppIconExpand, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconExperiment = defineContainer('wpp-icon-experiment-v4-1-0', defineWppIconExperiment, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconExport = defineContainer('wpp-icon-export-v4-1-0', defineWppIconExport, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconExportFile = defineContainer('wpp-icon-export-file-v4-1-0', defineWppIconExportFile, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconExtension = defineContainer('wpp-icon-extension-v4-1-0', defineWppIconExtension, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconExternalLink = defineContainer('wpp-icon-external-link-v4-1-0', defineWppIconExternalLink, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEyeOff = defineContainer('wpp-icon-eye-off-v4-1-0', defineWppIconEyeOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEyeOn = defineContainer('wpp-icon-eye-on-v4-1-0', defineWppIconEyeOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconEyedropper = defineContainer('wpp-icon-eyedropper-v4-1-0', defineWppIconEyedropper, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFactory = defineContainer('wpp-icon-factory-v4-1-0', defineWppIconFactory, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFavourites = defineContainer('wpp-icon-favourites-v4-1-0', defineWppIconFavourites, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFavouritesFilled = defineContainer('wpp-icon-favourites-filled-v4-1-0', defineWppIconFavouritesFilled, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFile = defineContainer('wpp-icon-file-v4-1-0', defineWppIconFile, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFileCss = defineContainer('wpp-icon-file-css-v4-1-0', defineWppIconFileCss, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFileJs = defineContainer('wpp-icon-file-js-v4-1-0', defineWppIconFileJs, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFilePdf = defineContainer('wpp-icon-file-pdf-v4-1-0', defineWppIconFilePdf, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFileZip = defineContainer('wpp-icon-file-zip-v4-1-0', defineWppIconFileZip, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFill = defineContainer('wpp-icon-fill-v4-1-0', defineWppIconFill, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFilter = defineContainer('wpp-icon-filter-v4-1-0', defineWppIconFilter, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFingerprint = defineContainer('wpp-icon-fingerprint-v4-1-0', defineWppIconFingerprint, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFitHeight = defineContainer('wpp-icon-fit-height-v4-1-0', defineWppIconFitHeight, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFitWidth = defineContainer('wpp-icon-fit-width-v4-1-0', defineWppIconFitWidth, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFlagOff = defineContainer('wpp-icon-flag-off-v4-1-0', defineWppIconFlagOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFlagOn = defineContainer('wpp-icon-flag-on-v4-1-0', defineWppIconFlagOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFlip = defineContainer('wpp-icon-flip-v4-1-0', defineWppIconFlip, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconFloatCenter = defineContainer('wpp-icon-float-center-v4-1-0', defineWppIconFloatCenter, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFloatLeft = defineContainer('wpp-icon-float-left-v4-1-0', defineWppIconFloatLeft, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFloatRight = defineContainer('wpp-icon-float-right-v4-1-0', defineWppIconFloatRight, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFluidWorkflow = defineContainer('wpp-icon-fluid-workflow-v4-1-0', defineWppIconFluidWorkflow, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFolder = defineContainer('wpp-icon-folder-v4-1-0', defineWppIconFolder, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFolderBlocked = defineContainer('wpp-icon-folder-blocked-v4-1-0', defineWppIconFolderBlocked, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFolderLink = defineContainer('wpp-icon-folder-link-v4-1-0', defineWppIconFolderLink, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFolderOpen = defineContainer('wpp-icon-folder-open-v4-1-0', defineWppIconFolderOpen, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFont = defineContainer('wpp-icon-font-v4-1-0', defineWppIconFont, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconForward = defineContainer('wpp-icon-forward-v4-1-0', defineWppIconForward, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFullscreen = defineContainer('wpp-icon-fullscreen-v4-1-0', defineWppIconFullscreen, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconFullscreenMinimise = defineContainer('wpp-icon-fullscreen-minimise-v4-1-0', defineWppIconFullscreenMinimise, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGallery = defineContainer('wpp-icon-gallery-v4-1-0', defineWppIconGallery, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGasStation = defineContainer('wpp-icon-gas-station-v4-1-0', defineWppIconGasStation, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGear = defineContainer('wpp-icon-gear-v4-1-0', defineWppIconGear, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGif = defineContainer('wpp-icon-gif-v4-1-0', defineWppIconGif, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGlobe = defineContainer('wpp-icon-globe-v4-1-0', defineWppIconGlobe, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGps = defineContainer('wpp-icon-gps-v4-1-0', defineWppIconGps, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGraph = defineContainer('wpp-icon-graph-v4-1-0', defineWppIconGraph, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconGrid = defineContainer('wpp-icon-grid-v4-1-0', defineWppIconGrid, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconH1 = defineContainer('wpp-icon-h1-v4-1-0', defineWppIconH1, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconH2 = defineContainer('wpp-icon-h2-v4-1-0', defineWppIconH2, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconH3 = defineContainer('wpp-icon-h3-v4-1-0', defineWppIconH3, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHandDraw = defineContainer('wpp-icon-hand-draw-v4-1-0', defineWppIconHandDraw, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHandOff = defineContainer('wpp-icon-hand-off-v4-1-0', defineWppIconHandOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHandOn = defineContainer('wpp-icon-hand-on-v4-1-0', defineWppIconHandOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHash = defineContainer('wpp-icon-hash-v4-1-0', defineWppIconHash, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHd = defineContainer('wpp-icon-hd-v4-1-0', defineWppIconHd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHdr = defineContainer('wpp-icon-hdr-v4-1-0', defineWppIconHdr, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHeadphones = defineContainer('wpp-icon-headphones-v4-1-0', defineWppIconHeadphones, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHelp = defineContainer('wpp-icon-help-v4-1-0', defineWppIconHelp, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconHistory = defineContainer('wpp-icon-history-v4-1-0', defineWppIconHistory, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHome = defineContainer('wpp-icon-home-v4-1-0', defineWppIconHome, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHomeCheckmark = defineContainer('wpp-icon-home-checkmark-v4-1-0', defineWppIconHomeCheckmark, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHospital = defineContainer('wpp-icon-hospital-v4-1-0', defineWppIconHospital, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconHub = defineContainer('wpp-icon-hub-v4-1-0', defineWppIconHub, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIcons = defineContainer('wpp-icon-icons-v4-1-0', defineWppIconIcons, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIdea = defineContainer('wpp-icon-idea-v4-1-0', defineWppIconIdea, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIframe = defineContainer('wpp-icon-iframe-v4-1-0', defineWppIconIframe, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconImage = defineContainer('wpp-icon-image-v4-1-0', defineWppIconImage, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconImageOff = defineContainer('wpp-icon-image-off-v4-1-0', defineWppIconImageOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconImport = defineContainer('wpp-icon-import-v4-1-0', defineWppIconImport, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconInbox = defineContainer('wpp-icon-inbox-v4-1-0', defineWppIconInbox, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIncognito = defineContainer('wpp-icon-incognito-v4-1-0', defineWppIconIncognito, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIncomplete = defineContainer('wpp-icon-incomplete-v4-1-0', defineWppIconIncomplete, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIncrease = defineContainer('wpp-icon-increase-v4-1-0', defineWppIconIncrease, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIndentDecrease = defineContainer('wpp-icon-indent-decrease-v4-1-0', defineWppIconIndentDecrease, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconIndentIncrease = defineContainer('wpp-icon-indent-increase-v4-1-0', defineWppIconIndentIncrease, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconInfo = defineContainer('wpp-icon-info-v4-1-0', defineWppIconInfo, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconInfoMessage = defineContainer('wpp-icon-info-message-v4-1-0', defineWppIconInfoMessage, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconInstallUpdate = defineContainer('wpp-icon-install-update-v4-1-0', defineWppIconInstallUpdate, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconItalic = defineContainer('wpp-icon-italic-v4-1-0', defineWppIconItalic, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconJavaScript = defineContainer('wpp-icon-java-script-v4-1-0', defineWppIconJavaScript, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconJoin = defineContainer('wpp-icon-join-v4-1-0', defineWppIconJoin, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconKey = defineContainer('wpp-icon-key-v4-1-0', defineWppIconKey, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconKeyboard = defineContainer('wpp-icon-keyboard-v4-1-0', defineWppIconKeyboard, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLaptop = defineContainer('wpp-icon-laptop-v4-1-0', defineWppIconLaptop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLaugh = defineContainer('wpp-icon-laugh-v4-1-0', defineWppIconLaugh, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLaunch = defineContainer('wpp-icon-launch-v4-1-0', defineWppIconLaunch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLayer = defineContainer('wpp-icon-layer-v4-1-0', defineWppIconLayer, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLeaf = defineContainer('wpp-icon-leaf-v4-1-0', defineWppIconLeaf, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLibrary = defineContainer('wpp-icon-library-v4-1-0', defineWppIconLibrary, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLibraryBuilding = defineContainer('wpp-icon-library-building-v4-1-0', defineWppIconLibraryBuilding, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLikeOff = defineContainer('wpp-icon-like-off-v4-1-0', defineWppIconLikeOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLikeOn = defineContainer('wpp-icon-like-on-v4-1-0', defineWppIconLikeOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLink = defineContainer('wpp-icon-link-v4-1-0', defineWppIconLink, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLive = defineContainer('wpp-icon-live-v4-1-0', defineWppIconLive, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLocation = defineContainer('wpp-icon-location-v4-1-0', defineWppIconLocation, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLockOff = defineContainer('wpp-icon-lock-off-v4-1-0', defineWppIconLockOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLockOn = defineContainer('wpp-icon-lock-on-v4-1-0', defineWppIconLockOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLodging = defineContainer('wpp-icon-lodging-v4-1-0', defineWppIconLodging, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLogin = defineContainer('wpp-icon-login-v4-1-0', defineWppIconLogin, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconLogout = defineContainer('wpp-icon-logout-v4-1-0', defineWppIconLogout, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMagicWand = defineContainer('wpp-icon-magic-wand-v4-1-0', defineWppIconMagicWand, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMail = defineContainer('wpp-icon-mail-v4-1-0', defineWppIconMail, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMailAdd = defineContainer('wpp-icon-mail-add-v4-1-0', defineWppIconMailAdd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMailAllRead = defineContainer('wpp-icon-mail-all-read-v4-1-0', defineWppIconMailAllRead, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMailBlocked = defineContainer('wpp-icon-mail-blocked-v4-1-0', defineWppIconMailBlocked, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMailCopy = defineContainer('wpp-icon-mail-copy-v4-1-0', defineWppIconMailCopy, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMailOff = defineContainer('wpp-icon-mail-off-v4-1-0', defineWppIconMailOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMailRead = defineContainer('wpp-icon-mail-read-v4-1-0', defineWppIconMailRead, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMap = defineContainer('wpp-icon-map-v4-1-0', defineWppIconMap, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMathFormula = defineContainer('wpp-icon-math-formula-v4-1-0', defineWppIconMathFormula, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMaximise = defineContainer('wpp-icon-maximise-v4-1-0', defineWppIconMaximise, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconMeet = defineContainer('wpp-icon-meet-v4-1-0', defineWppIconMeet, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMention = defineContainer('wpp-icon-mention-v4-1-0', defineWppIconMention, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMerge = defineContainer('wpp-icon-merge-v4-1-0', defineWppIconMerge, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconMicBlocked = defineContainer('wpp-icon-mic-blocked-v4-1-0', defineWppIconMicBlocked, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMicOff = defineContainer('wpp-icon-mic-off-v4-1-0', defineWppIconMicOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMicOn = defineContainer('wpp-icon-mic-on-v4-1-0', defineWppIconMicOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMinimise = defineContainer('wpp-icon-minimise-v4-1-0', defineWppIconMinimise, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconMobile = defineContainer('wpp-icon-mobile-v4-1-0', defineWppIconMobile, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMoney = defineContainer('wpp-icon-money-v4-1-0', defineWppIconMoney, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMore = defineContainer('wpp-icon-more-v4-1-0', defineWppIconMore, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconMove = defineContainer('wpp-icon-move-v4-1-0', defineWppIconMove, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMovie = defineContainer('wpp-icon-movie-v4-1-0', defineWppIconMovie, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMultipleEmotions = defineContainer('wpp-icon-multiple-emotions-v4-1-0', defineWppIconMultipleEmotions, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconMusic = defineContainer('wpp-icon-music-v4-1-0', defineWppIconMusic, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNavigationMenu = defineContainer('wpp-icon-navigation-menu-v4-1-0', defineWppIconNavigationMenu, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNeutral = defineContainer('wpp-icon-neutral-v4-1-0', defineWppIconNeutral, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNeutralTrading = defineContainer('wpp-icon-neutral-trading-v4-1-0', defineWppIconNeutralTrading, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNewspaper = defineContainer('wpp-icon-newspaper-v4-1-0', defineWppIconNewspaper, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNext = defineContainer('wpp-icon-next-v4-1-0', defineWppIconNext, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNightLife = defineContainer('wpp-icon-night-life-v4-1-0', defineWppIconNightLife, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNote = defineContainer('wpp-icon-note-v4-1-0', defineWppIconNote, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNotificationNew = defineContainer('wpp-icon-notification-new-v4-1-0', defineWppIconNotificationNew, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNotificationPause = defineContainer('wpp-icon-notification-pause-v4-1-0', defineWppIconNotificationPause, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNuclearDanger = defineContainer('wpp-icon-nuclear-danger-v4-1-0', defineWppIconNuclearDanger, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconNumber = defineContainer('wpp-icon-number-v4-1-0', defineWppIconNumber, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconObjectAlignment = defineContainer('wpp-icon-object-alignment-v4-1-0', defineWppIconObjectAlignment, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconObjectAlignmentCenter = defineContainer('wpp-icon-object-alignment-center-v4-1-0', defineWppIconObjectAlignmentCenter, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconOrderedList = defineContainer('wpp-icon-ordered-list-v4-1-0', defineWppIconOrderedList, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconOrganization = defineContainer('wpp-icon-organization-v4-1-0', defineWppIconOrganization, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconOrientation = defineContainer('wpp-icon-orientation-v4-1-0', defineWppIconOrientation, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconOutdoor = defineContainer('wpp-icon-outdoor-v4-1-0', defineWppIconOutdoor, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconOutdoorMedia = defineContainer('wpp-icon-outdoor-media-v4-1-0', defineWppIconOutdoorMedia, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconOwner = defineContainer('wpp-icon-owner-v4-1-0', defineWppIconOwner, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPadding = defineContainer('wpp-icon-padding-v4-1-0', defineWppIconPadding, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconPair = defineContainer('wpp-icon-pair-v4-1-0', defineWppIconPair, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconParking = defineContainer('wpp-icon-parking-v4-1-0', defineWppIconParking, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPaste = defineContainer('wpp-icon-paste-v4-1-0', defineWppIconPaste, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPause = defineContainer('wpp-icon-pause-v4-1-0', defineWppIconPause, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPen = defineContainer('wpp-icon-pen-v4-1-0', defineWppIconPen, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPending = defineContainer('wpp-icon-pending-v4-1-0', defineWppIconPending, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPentagon = defineContainer('wpp-icon-pentagon-v4-1-0', defineWppIconPentagon, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPeople = defineContainer('wpp-icon-people-v4-1-0', defineWppIconPeople, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPharmacy = defineContainer('wpp-icon-pharmacy-v4-1-0', defineWppIconPharmacy, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPhone = defineContainer('wpp-icon-phone-v4-1-0', defineWppIconPhone, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPieChart = defineContainer('wpp-icon-pie-chart-v4-1-0', defineWppIconPieChart, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPinned = defineContainer('wpp-icon-pinned-v4-1-0', defineWppIconPinned, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPitch = defineContainer('wpp-icon-pitch-v4-1-0', defineWppIconPitch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPlay = defineContainer('wpp-icon-play-v4-1-0', defineWppIconPlay, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPlus = defineContainer('wpp-icon-plus-v4-1-0', defineWppIconPlus, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPlusCircle = defineContainer('wpp-icon-plus-circle-v4-1-0', defineWppIconPlusCircle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPolice = defineContainer('wpp-icon-police-v4-1-0', defineWppIconPolice, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPost = defineContainer('wpp-icon-post-v4-1-0', defineWppIconPost, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPound = defineContainer('wpp-icon-pound-v4-1-0', defineWppIconPound, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPremium = defineContainer('wpp-icon-premium-v4-1-0', defineWppIconPremium, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPrevious = defineContainer('wpp-icon-previous-v4-1-0', defineWppIconPrevious, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPrint = defineContainer('wpp-icon-print-v4-1-0', defineWppIconPrint, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconPrivateAccount = defineContainer('wpp-icon-private-account-v4-1-0', defineWppIconPrivateAccount, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconQa = defineContainer('wpp-icon-qa-v4-1-0', defineWppIconQa, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconQrCode = defineContainer('wpp-icon-qr-code-v4-1-0', defineWppIconQrCode, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRadio = defineContainer('wpp-icon-radio-v4-1-0', defineWppIconRadio, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRanking = defineContainer('wpp-icon-ranking-v4-1-0', defineWppIconRanking, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRatio = defineContainer('wpp-icon-ratio-v4-1-0', defineWppIconRatio, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRecord = defineContainer('wpp-icon-record-v4-1-0', defineWppIconRecord, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRecordStop = defineContainer('wpp-icon-record-stop-v4-1-0', defineWppIconRecordStop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRectangle = defineContainer('wpp-icon-rectangle-v4-1-0', defineWppIconRectangle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRecycle = defineContainer('wpp-icon-recycle-v4-1-0', defineWppIconRecycle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRedo = defineContainer('wpp-icon-redo-v4-1-0', defineWppIconRedo, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRefresh = defineContainer('wpp-icon-refresh-v4-1-0', defineWppIconRefresh, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRefreshDashed = defineContainer('wpp-icon-refresh-dashed-v4-1-0', defineWppIconRefreshDashed, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconReject = defineContainer('wpp-icon-reject-v4-1-0', defineWppIconReject, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRemove = defineContainer('wpp-icon-remove-v4-1-0', defineWppIconRemove, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRemoveApp = defineContainer('wpp-icon-remove-app-v4-1-0', defineWppIconRemoveApp, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRemoveCircle = defineContainer('wpp-icon-remove-circle-v4-1-0', defineWppIconRemoveCircle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRepeatOff = defineContainer('wpp-icon-repeat-off-v4-1-0', defineWppIconRepeatOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRepeatOn = defineContainer('wpp-icon-repeat-on-v4-1-0', defineWppIconRepeatOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconReply = defineContainer('wpp-icon-reply-v4-1-0', defineWppIconReply, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconReplyAll = defineContainer('wpp-icon-reply-all-v4-1-0', defineWppIconReplyAll, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconReset = defineContainer('wpp-icon-reset-v4-1-0', defineWppIconReset, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconResetDashed = defineContainer('wpp-icon-reset-dashed-v4-1-0', defineWppIconResetDashed, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconResize = defineContainer('wpp-icon-resize-v4-1-0', defineWppIconResize, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconResizeLarge = defineContainer('wpp-icon-resize-large-v4-1-0', defineWppIconResizeLarge, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconResizeSmall = defineContainer('wpp-icon-resize-small-v4-1-0', defineWppIconResizeSmall, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRestaurant = defineContainer('wpp-icon-restaurant-v4-1-0', defineWppIconRestaurant, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRhombus = defineContainer('wpp-icon-rhombus-v4-1-0', defineWppIconRhombus, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRotate = defineContainer('wpp-icon-rotate-v4-1-0', defineWppIconRotate, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconRotateClockwise = defineContainer('wpp-icon-rotate-clockwise-v4-1-0', defineWppIconRotateClockwise, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRotateCounterclockwise = defineContainer('wpp-icon-rotate-counterclockwise-v4-1-0', defineWppIconRotateCounterclockwise, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRss = defineContainer('wpp-icon-rss-v4-1-0', defineWppIconRss, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconRupee = defineContainer('wpp-icon-rupee-v4-1-0', defineWppIconRupee, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSad = defineContainer('wpp-icon-sad-v4-1-0', defineWppIconSad, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSadSlightly = defineContainer('wpp-icon-sad-slightly-v4-1-0', defineWppIconSadSlightly, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconScale = defineContainer('wpp-icon-scale-v4-1-0', defineWppIconScale, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconScaleBottom = defineContainer('wpp-icon-scale-bottom-v4-1-0', defineWppIconScaleBottom, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconScan = defineContainer('wpp-icon-scan-v4-1-0', defineWppIconScan, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSchool = defineContainer('wpp-icon-school-v4-1-0', defineWppIconSchool, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSearch = defineContainer('wpp-icon-search-v4-1-0', defineWppIconSearch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSegmentedControl = defineContainer('wpp-icon-segmented-control-v4-1-0', defineWppIconSegmentedControl, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSelectObject = defineContainer('wpp-icon-select-object-v4-1-0', defineWppIconSelectObject, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSend = defineContainer('wpp-icon-send-v4-1-0', defineWppIconSend, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSendOff = defineContainer('wpp-icon-send-off-v4-1-0', defineWppIconSendOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconService = defineContainer('wpp-icon-service-v4-1-0', defineWppIconService, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShapes = defineContainer('wpp-icon-shapes-v4-1-0', defineWppIconShapes, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShare = defineContainer('wpp-icon-share-v4-1-0', defineWppIconShare, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShield = defineContainer('wpp-icon-shield-v4-1-0', defineWppIconShield, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShieldDismiss = defineContainer('wpp-icon-shield-dismiss-v4-1-0', defineWppIconShieldDismiss, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShieldError = defineContainer('wpp-icon-shield-error-v4-1-0', defineWppIconShieldError, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShieldSuccess = defineContainer('wpp-icon-shield-success-v4-1-0', defineWppIconShieldSuccess, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShip = defineContainer('wpp-icon-ship-v4-1-0', defineWppIconShip, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShopping = defineContainer('wpp-icon-shopping-v4-1-0', defineWppIconShopping, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconShutDown = defineContainer('wpp-icon-shut-down-v4-1-0', defineWppIconShutDown, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSmartwatch = defineContainer('wpp-icon-smartwatch-v4-1-0', defineWppIconSmartwatch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSmile = defineContainer('wpp-icon-smile-v4-1-0', defineWppIconSmile, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSmileSlightly = defineContainer('wpp-icon-smile-slightly-v4-1-0', defineWppIconSmileSlightly, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSocialMedia = defineContainer('wpp-icon-social-media-v4-1-0', defineWppIconSocialMedia, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSort = defineContainer('wpp-icon-sort-v4-1-0', defineWppIconSort, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSortDecrease = defineContainer('wpp-icon-sort-decrease-v4-1-0', defineWppIconSortDecrease, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSortIncrease = defineContainer('wpp-icon-sort-increase-v4-1-0', defineWppIconSortIncrease, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSparkle = defineContainer('wpp-icon-sparkle-v4-1-0', defineWppIconSparkle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSpeaker = defineContainer('wpp-icon-speaker-v4-1-0', defineWppIconSpeaker, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSpeakerBluetooth = defineContainer('wpp-icon-speaker-bluetooth-v4-1-0', defineWppIconSpeakerBluetooth, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSpeakerMute = defineContainer('wpp-icon-speaker-mute-v4-1-0', defineWppIconSpeakerMute, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSpeakerOff = defineContainer('wpp-icon-speaker-off-v4-1-0', defineWppIconSpeakerOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSplit = defineContainer('wpp-icon-split-v4-1-0', defineWppIconSplit, [
    'size',
    'width',
    'height',
    'color',
    'direction'
]);
export const WppIconSport = defineContainer('wpp-icon-sport-v4-1-0', defineWppIconSport, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSpreadsheet = defineContainer('wpp-icon-spreadsheet-v4-1-0', defineWppIconSpreadsheet, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSquare = defineContainer('wpp-icon-square-v4-1-0', defineWppIconSquare, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSquareHint = defineContainer('wpp-icon-square-hint-v4-1-0', defineWppIconSquareHint, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconStatisticDocument = defineContainer('wpp-icon-statistic-document-v4-1-0', defineWppIconStatisticDocument, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSticker = defineContainer('wpp-icon-sticker-v4-1-0', defineWppIconSticker, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconStop = defineContainer('wpp-icon-stop-v4-1-0', defineWppIconStop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconStrikeThrough = defineContainer('wpp-icon-strike-through-v4-1-0', defineWppIconStrikeThrough, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconStyleguide = defineContainer('wpp-icon-styleguide-v4-1-0', defineWppIconStyleguide, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSubItems = defineContainer('wpp-icon-sub-items-v4-1-0', defineWppIconSubItems, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSubscribe = defineContainer('wpp-icon-subscribe-v4-1-0', defineWppIconSubscribe, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSuccess = defineContainer('wpp-icon-success-v4-1-0', defineWppIconSuccess, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSupermarket = defineContainer('wpp-icon-supermarket-v4-1-0', defineWppIconSupermarket, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSupport = defineContainer('wpp-icon-support-v4-1-0', defineWppIconSupport, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSupportChat = defineContainer('wpp-icon-support-chat-v4-1-0', defineWppIconSupportChat, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSurprise = defineContainer('wpp-icon-surprise-v4-1-0', defineWppIconSurprise, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSymbols = defineContainer('wpp-icon-symbols-v4-1-0', defineWppIconSymbols, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconSync = defineContainer('wpp-icon-sync-v4-1-0', defineWppIconSync, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTableDefault = defineContainer('wpp-icon-table-default-v4-1-0', defineWppIconTableDefault, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTableDismiss = defineContainer('wpp-icon-table-dismiss-v4-1-0', defineWppIconTableDismiss, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTableEdit = defineContainer('wpp-icon-table-edit-v4-1-0', defineWppIconTableEdit, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTableLink = defineContainer('wpp-icon-table-link-v4-1-0', defineWppIconTableLink, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTableSimple = defineContainer('wpp-icon-table-simple-v4-1-0', defineWppIconTableSimple, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTableSort = defineContainer('wpp-icon-table-sort-v4-1-0', defineWppIconTableSort, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortAsc = defineContainer('wpp-icon-table-sort-asc-v4-1-0', defineWppIconTableSortAsc, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortAscHover = defineContainer('wpp-icon-table-sort-asc-hover-v4-1-0', defineWppIconTableSortAscHover, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortAscPressed = defineContainer('wpp-icon-table-sort-asc-pressed-v4-1-0', defineWppIconTableSortAscPressed, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortDesc = defineContainer('wpp-icon-table-sort-desc-v4-1-0', defineWppIconTableSortDesc, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortDescHover = defineContainer('wpp-icon-table-sort-desc-hover-v4-1-0', defineWppIconTableSortDescHover, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortDescPressed = defineContainer('wpp-icon-table-sort-desc-pressed-v4-1-0', defineWppIconTableSortDescPressed, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortHover = defineContainer('wpp-icon-table-sort-hover-v4-1-0', defineWppIconTableSortHover, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortPressed = defineContainer('wpp-icon-table-sort-pressed-v4-1-0', defineWppIconTableSortPressed, [
    'size',
    'width',
    'height',
    'color',
    'upArrowColor',
    'downArrowColor'
]);
export const WppIconTableSortWrapper = defineContainer('wpp-icon-table-sort-wrapper-v4-1-0', defineWppIconTableSortWrapper, [
    'size',
    'width',
    'height',
    'direction',
    'interactive',
    'colors',
    'isHovered',
    'isPressed'
]);
export const WppIconTablet = defineContainer('wpp-icon-tablet-v4-1-0', defineWppIconTablet, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTag = defineContainer('wpp-icon-tag-v4-1-0', defineWppIconTag, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTarget = defineContainer('wpp-icon-target-v4-1-0', defineWppIconTarget, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTaskList = defineContainer('wpp-icon-task-list-v4-1-0', defineWppIconTaskList, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTaskListSquare = defineContainer('wpp-icon-task-list-square-v4-1-0', defineWppIconTaskListSquare, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconText = defineContainer('wpp-icon-text-v4-1-0', defineWppIconText, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentCenter = defineContainer('wpp-icon-text-alignment-center-v4-1-0', defineWppIconTextAlignmentCenter, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentDistribute = defineContainer('wpp-icon-text-alignment-distribute-v4-1-0', defineWppIconTextAlignmentDistribute, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentDistributeVertical = defineContainer('wpp-icon-text-alignment-distribute-vertical-v4-1-0', defineWppIconTextAlignmentDistributeVertical, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentJustify = defineContainer('wpp-icon-text-alignment-justify-v4-1-0', defineWppIconTextAlignmentJustify, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentJustifyLow = defineContainer('wpp-icon-text-alignment-justify-low-v4-1-0', defineWppIconTextAlignmentJustifyLow, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentLeft = defineContainer('wpp-icon-text-alignment-left-v4-1-0', defineWppIconTextAlignmentLeft, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTextAlignmentRight = defineContainer('wpp-icon-text-alignment-right-v4-1-0', defineWppIconTextAlignmentRight, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTheatre = defineContainer('wpp-icon-theatre-v4-1-0', defineWppIconTheatre, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconThumbsDown = defineContainer('wpp-icon-thumbs-down-v4-1-0', defineWppIconThumbsDown, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconThumbsDownFilled = defineContainer('wpp-icon-thumbs-down-filled-v4-1-0', defineWppIconThumbsDownFilled, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconThumbsUp = defineContainer('wpp-icon-thumbs-up-v4-1-0', defineWppIconThumbsUp, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconThumbsUpFilled = defineContainer('wpp-icon-thumbs-up-filled-v4-1-0', defineWppIconThumbsUpFilled, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTick = defineContainer('wpp-icon-tick-v4-1-0', defineWppIconTick, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTourism = defineContainer('wpp-icon-tourism-v4-1-0', defineWppIconTourism, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTrain = defineContainer('wpp-icon-train-v4-1-0', defineWppIconTrain, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTranslate = defineContainer('wpp-icon-translate-v4-1-0', defineWppIconTranslate, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTrash = defineContainer('wpp-icon-trash-v4-1-0', defineWppIconTrash, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTrendAscend = defineContainer('wpp-icon-trend-ascend-v4-1-0', defineWppIconTrendAscend, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTrendDescent = defineContainer('wpp-icon-trend-descent-v4-1-0', defineWppIconTrendDescent, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTriangle = defineContainer('wpp-icon-triangle-v4-1-0', defineWppIconTriangle, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTriangleFill = defineContainer('wpp-icon-triangle-fill-v4-1-0', defineWppIconTriangleFill, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTune = defineContainer('wpp-icon-tune-v4-1-0', defineWppIconTune, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTv = defineContainer('wpp-icon-tv-v4-1-0', defineWppIconTv, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconTwentyFourHours = defineContainer('wpp-icon-twenty-four-hours-v4-1-0', defineWppIconTwentyFourHours, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUnderline = defineContainer('wpp-icon-underline-v4-1-0', defineWppIconUnderline, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUndo = defineContainer('wpp-icon-undo-v4-1-0', defineWppIconUndo, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUnlink = defineContainer('wpp-icon-unlink-v4-1-0', defineWppIconUnlink, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUnorderedList = defineContainer('wpp-icon-unordered-list-v4-1-0', defineWppIconUnorderedList, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUnpinned = defineContainer('wpp-icon-unpinned-v4-1-0', defineWppIconUnpinned, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUpload = defineContainer('wpp-icon-upload-v4-1-0', defineWppIconUpload, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUser = defineContainer('wpp-icon-user-v4-1-0', defineWppIconUser, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUserAdd = defineContainer('wpp-icon-user-add-v4-1-0', defineWppIconUserAdd, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUserBlock = defineContainer('wpp-icon-user-block-v4-1-0', defineWppIconUserBlock, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUserChat = defineContainer('wpp-icon-user-chat-v4-1-0', defineWppIconUserChat, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUserSearch = defineContainer('wpp-icon-user-search-v4-1-0', defineWppIconUserSearch, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUserStarred = defineContainer('wpp-icon-user-starred-v4-1-0', defineWppIconUserStarred, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconUserTag = defineContainer('wpp-icon-user-tag-v4-1-0', defineWppIconUserTag, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconVideoBlocked = defineContainer('wpp-icon-video-blocked-v4-1-0', defineWppIconVideoBlocked, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconVideoClip = defineContainer('wpp-icon-video-clip-v4-1-0', defineWppIconVideoClip, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconVideoOff = defineContainer('wpp-icon-video-off-v4-1-0', defineWppIconVideoOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconVideoOn = defineContainer('wpp-icon-video-on-v4-1-0', defineWppIconVideoOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconVr = defineContainer('wpp-icon-vr-v4-1-0', defineWppIconVr, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWarning = defineContainer('wpp-icon-warning-v4-1-0', defineWppIconWarning, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWifiOff = defineContainer('wpp-icon-wifi-off-v4-1-0', defineWppIconWifiOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWifiOn = defineContainer('wpp-icon-wifi-on-v4-1-0', defineWppIconWifiOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWifiWarning = defineContainer('wpp-icon-wifi-warning-v4-1-0', defineWppIconWifiWarning, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWithHand = defineContainer('wpp-icon-with-hand-v4-1-0', defineWppIconWithHand, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWorkshop = defineContainer('wpp-icon-workshop-v4-1-0', defineWppIconWorkshop, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWrapOff = defineContainer('wpp-icon-wrap-off-v4-1-0', defineWppIconWrapOff, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconWrapOn = defineContainer('wpp-icon-wrap-on-v4-1-0', defineWppIconWrapOn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconYen = defineContainer('wpp-icon-yen-v4-1-0', defineWppIconYen, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconYuan = defineContainer('wpp-icon-yuan-v4-1-0', defineWppIconYuan, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconZoo = defineContainer('wpp-icon-zoo-v4-1-0', defineWppIconZoo, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconZoomIn = defineContainer('wpp-icon-zoom-in-v4-1-0', defineWppIconZoomIn, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppIconZoomOut = defineContainer('wpp-icon-zoom-out-v4-1-0', defineWppIconZoomOut, [
    'size',
    'width',
    'height',
    'color'
]);
export const WppInlineEdit = defineContainer('wpp-inline-edit-v4-1-0', defineWppInlineEdit, [
    'mode',
    'value',
    'placeholder',
    'dropdownConfig',
    'inputWidth',
    'locales',
    'wppModeChange',
    'wppConfirm'
]);
export const WppInlineMessage = defineContainer('wpp-inline-message-v4-1-0', defineWppInlineMessage, [
    'titleText',
    'actionBtnText',
    'message',
    'type',
    'size',
    'tooltipConfig',
    'showTooltipFrom',
    'hideCloseBtn',
    'locales',
    'wppClickActionBtn',
    'wppClickCloseBtn'
]);
export const WppInput = defineContainer('wpp-input-v4-1-0', defineWppInput, [
    'name',
    'type',
    'value',
    'defaultValue',
    'placeholder',
    'required',
    'readOnly',
    'disabled',
    'autoFocus',
    'size',
    'message',
    'messageType',
    'maxMessageLength',
    'ariaProps',
    'tooltipConfig',
    'truncationTooltipConfig',
    'labelTooltipConfig',
    'maskOptions',
    'labelConfig',
    'maxLength',
    'minLength',
    'locales',
    'loading',
    'autocomplete',
    'withCrossIcon',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppChangeExtra'
]);
export const WppInternalLabel = defineContainer('wpp-internal-label-v4-1-0', defineWppInternalLabel, [
    'labelText',
    'description',
    'optional',
    'typography',
    'disabled',
    'locales',
    'tooltipConfig',
    'role'
]);
export const WppLabel = defineContainer('wpp-label-v4-1-0', defineWppLabel, [
    'description',
    'htmlFor',
    'optional',
    'typography',
    'disabled',
    'config',
    'tag',
    'tooltipConfig',
    'labelId'
]);
export const WppLegend = defineContainer('wpp-legend-v4-1-0', defineWppLegend, [
    'label',
    'disabled',
    'color'
]);
export const WppListItem = defineContainer('wpp-list-item-v4-1-0', defineWppListItem, [
    'labelTypography',
    'captionTypography',
    'value',
    'label',
    'checked',
    'active',
    'selectable',
    'multiple',
    'indeterminate',
    'disabled',
    'highlight',
    'containerState',
    'isExtended',
    'tooltipConfig',
    'labelTooltipConfig',
    'linkConfig',
    'hidden',
    'isLoadingItem',
    'nonInteractive',
    'checkboxName',
    'wppChangeListItem'
]);
export const WppLoadMore = defineContainer('wpp-load-more-v4-1-0', defineWppLoadMore, [
    'totalItems',
    'itemsLoaded',
    'showProgressBar',
    'loading',
    'disabled',
    'incrementBy',
    'ariaProps',
    'wppClickLoadMore'
]);
export const WppMenuContext = defineContainer('wpp-menu-context-v4-1-0', defineWppMenuContext, [
    'listWidth',
    'dropdownConfig',
    'appendToListWrapper',
    'externalClass',
    'ariaProps',
    'wppBlur',
    'wppFocus'
]);
export const WppMenuGroup = defineContainer('wpp-menu-group-v4-1-0', defineWppMenuGroup, [
    'header',
    'withDivider'
]);
export const WppModal = defineContainer('wpp-modal-v4-1-0', defineWppModal, [
    'open',
    'size',
    'withTransparentOverlay',
    'disableOutsideClick',
    'formConfig',
    'zIndex',
    'osBarCompatible',
    'ariaProps',
    'wppModalClose',
    'wppModalOpenStart',
    'wppModalOpenComplete',
    'wppModalCloseStart',
    'wppModalCloseComplete'
]);
export const WppMoreButton = defineContainer('wpp-more-button-v4-1-0', defineWppMoreButton, [
    'name',
    'size',
    'disabled',
    'loading',
    'ariaProps'
]);
export const WppNavSidebar = defineContainer('wpp-nav-sidebar-v4-1-0', defineWppNavSidebar, [
    'activePath',
    'nativeLink',
    'zIndex',
    'wppChange'
]);
export const WppNavSidebarItem = defineContainer('wpp-nav-sidebar-item-v4-1-0', defineWppNavSidebarItem, [
    'expanded',
    'extended',
    'maxTitleLengthWithSubItems',
    'maxTitleLengthWithoutSubItems',
    'label',
    'path',
    'groupTitle',
    'nestedItem',
    'divide',
    'active',
    'nativeLink',
    'target',
    'wppClickSidebarItem',
    'wppClickExpandedItem'
]);
export const WppNavigationItem = defineContainer('wpp-navigation-item-v4-1-0', defineWppNavigationItem, [
    'menuExpanded',
    'label',
    'value',
    'path',
    'nestedItem',
    'active',
    'menu',
    'extended',
    'chevronOnly',
    'nativeLink',
    'wppActiveNavItemChanged'
]);
export const WppOverlay = defineContainer('wpp-overlay-v4-1-0', defineWppOverlay, [
    'isVisible',
    'zIndex',
    'wppClick'
]);
export const WppPagination = defineContainer('wpp-pagination-v4-1-0', defineWppPagination, [
    'count',
    'itemsPerPage',
    'selectedItemPerPage',
    'pageSelectThreshold',
    'activePageNumber',
    'dropdownConfig',
    'locales',
    'wppChange'
]);
export const WppPaginationItem = defineContainer('wpp-pagination-item-v4-1-0', defineWppPaginationItem, [
    'number',
    'selected',
    'wppPageChange'
]);
export const WppPaginationSelect = defineContainer('wpp-pagination-select-v4-1-0', defineWppPaginationSelect, [
    'count',
    'pageSelectThreshold',
    'activePageNumber',
    'wppChange'
]);
export const WppPill = defineContainer('wpp-pill-v4-1-0', defineWppPill, [
    'value',
    'size',
    'type',
    'disabled',
    'removable',
    'checked',
    'label',
    'ariaProps',
    'name',
    'maxLength',
    'showTooltipOnTruncate',
    'wppClick',
    'wppFocus',
    'wppBlur',
    'wppClose',
    'wppDragPress'
]);
export const WppPillGroup = defineContainer('wpp-pill-group-v4-1-0', defineWppPillGroup, [
    'name',
    'size',
    'value',
    'type',
    'required',
    'labelConfig',
    'labelTooltipConfig',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppPopover = defineContainer('wpp-popover-v4-1-0', defineWppPopover, [
    'config',
    'shouldCloseOnOutsideClick',
    'closable',
    'withSearch',
    'searchValue',
    'searchName',
    'persistantSearch',
    'externalClass',
    'dropdownWidth',
    'ariaProps',
    'locales',
    'wppSearchChange'
]);
export const WppProgressIndicator = defineContainer('wpp-progress-indicator-v4-1-0', defineWppProgressIndicator, [
    'width',
    'variant',
    'value',
    'isShowPercentage',
    'label',
    'ariaProps',
    'forceIntermediateEmptyState'
]);
export const WppQuillStyles = defineContainer('wpp-quill-styles-v4-1-0', defineWppQuillStyles);
export const WppRadio = defineContainer('wpp-radio-v4-1-0', defineWppRadio, [
    'name',
    'value',
    'checked',
    'required',
    'disabled',
    'autoFocus',
    'size',
    'ariaProps',
    'labelConfig',
    'labelTooltipConfig',
    'internalState',
    'index',
    'decorative',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppClickRadio'
]);
export const WppRadioGroup = defineContainer('wpp-radio-group-v4-1-0', defineWppRadioGroup, [
    'value',
    'required',
    'message',
    'messageType',
    'direction',
    'maxMessageLength',
    'labelConfig',
    'labelTooltipConfig',
    'ariaProps',
    'gap',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppRichtext = defineContainer('wpp-richtext-v4-1-0', defineWppRichtext, [
    'name',
    'required',
    'disabled',
    'autoFocus',
    'tooltipConfig',
    'labelConfig',
    'labelTooltipConfig',
    'message',
    'messageType',
    'maxMessageLength',
    'charactersLimit',
    'locales',
    'warningThreshold',
    'active',
    'format',
    'preserveWhitespace',
    'bounds',
    'debug',
    'value',
    'formats',
    'modules',
    'placeholder',
    'scrollingContainer',
    'strict',
    'styles',
    'wppInit',
    'wppChange',
    'wppSelectionChange',
    'wppFocus',
    'wppBlur',
    'wppUploadRequest'
]);
export const WppRichtextCommonStyles = defineContainer('wpp-richtext-common-styles-v4-1-0', defineWppRichtextCommonStyles);
export const WppRichtextHtml = defineContainer('wpp-richtext-html-v4-1-0', defineWppRichtextHtml, [
    'value'
]);
export const WppRichtextIconLoader = defineContainer('wpp-richtext-icon-loader-v4-1-0', defineWppRichtextIconLoader);
export const WppRichtextMarkdown = defineContainer('wpp-richtext-markdown-v4-1-0', defineWppRichtextMarkdown, [
    'value'
]);
export const WppRichtextView = defineContainer('wpp-richtext-view-v4-1-0', defineWppRichtextView, [
    'value',
    'format',
    'formats',
    'modules',
    'strict',
    'styles',
    'preserveWhitespace',
    'name'
]);
export const WppSearch = defineContainer('wpp-search-v4-1-0', defineWppSearch, [
    'name',
    'loading',
    'disabled',
    'autoFocus',
    'placeholder',
    'value',
    'getOptionId',
    'getOptionLabel',
    'required',
    'message',
    'messageType',
    'maxMessageLength',
    'dropdownConfig',
    'size',
    'locales',
    'labelTooltipConfig',
    'labelConfig',
    'simpleSearch',
    'dropdownWidth',
    'highlight',
    'openDropdownOnClick',
    'showOptions',
    'infinite',
    'infiniteLastPage',
    'loadMore',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppSearchValueChange'
]);
export const WppSegmentedControl = defineContainer('wpp-segmented-control-v4-1-0', defineWppSegmentedControl, [
    'size',
    'hugContentOff',
    'width',
    'variant',
    'required',
    'value',
    'labelConfig',
    'labelTooltipConfig',
    'ariaProps',
    'locales',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppSegmentedControlItem = defineContainer('wpp-segmented-control-item-v4-1-0', defineWppSegmentedControlItem, [
    'size',
    'active',
    'disabled',
    'value',
    'counter',
    'variant',
    'hugContentOff',
    'ariaProps',
    'wppChangeSegmentedControlItem',
    'wppFocus',
    'wppBlur'
]);
export const WppSelect = defineContainer('wpp-select-v4-1-0', defineWppSelect, [
    'consistentSearch',
    'value',
    'list',
    'type',
    'isTextSelect',
    'withSearch',
    'disabled',
    'required',
    'autoFocus',
    'loading',
    'withFolder',
    'truncate',
    'maximumSelectedItems',
    'getItemKey',
    'placeholder',
    'name',
    'labelConfig',
    'labelTooltipConfig',
    'size',
    'enableStaticOptions',
    'maxItemsToDisplay',
    'dropdownWidth',
    'displayValue',
    'isDropdownOpen',
    'ariaProps',
    'message',
    'messageType',
    'maxMessageLength',
    'dropdownConfig',
    'locales',
    'showSelectAllText',
    'showSelectAllOption',
    'inputValue',
    'maskOptions',
    'inputType',
    'tooltipConfig',
    'messageInTooltip',
    'wppChange',
    'wppFocus',
    'wppBlur',
    'wppApply'
]);
export const WppSideModal = defineContainer('wpp-side-modal-v4-1-0', defineWppSideModal, [
    'actionsConfig',
    'open',
    'size',
    'disableOutsideClick',
    'formConfig',
    'withBackButton',
    'backdropVisible',
    'zIndex',
    'osBarCompatible',
    'headerActionsConfig',
    'ariaProps',
    'locales',
    'wppSideModalClose',
    'wppSideModalOpenStart',
    'wppSideModalOpenComplete',
    'wppSideModalCloseStart',
    'wppSideModalCloseComplete',
    'wppSideModalBackButtonClick'
]);
export const WppSkeleton = defineContainer('wpp-skeleton-v4-1-0', defineWppSkeleton, [
    'variant',
    'width',
    'height'
]);
export const WppSlider = defineContainer('wpp-slider-v4-1-0', defineWppSlider, [
    'name',
    'inputWidth',
    'value',
    'marks',
    'type',
    'min',
    'max',
    'step',
    'continuous',
    'required',
    'disabled',
    'withInput',
    'withValue',
    'ariaProps',
    'labelTooltipConfig',
    'labelConfig',
    'size',
    'maskOptions',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppSortButton = defineContainer('wpp-sort-button-v4-1-0', defineWppSortButton, [
    'name',
    'ariaProps',
    'disabled',
    'autoFocus'
]);
export const WppSpinner = defineContainer('wpp-spinner-v4-1-0', defineWppSpinner, [
    'color',
    'size',
    'ariaProps'
]);
export const WppStep = defineContainer('wpp-step-v4-1-0', defineWppStep, [
    'active',
    'completed',
    'completedLine',
    'substep',
    'lastSubstepStepIndex',
    'step',
    'index',
    'width',
    'error',
    'warning',
    'lastStep',
    'orientation',
    'expanded',
    'displayedStep',
    'hasDescription',
    'iconDescription',
    'wppStepChange',
    'wppStepUpdate'
]);
export const WppStepper = defineContainer('wpp-stepper-v4-1-0', defineWppStepper, [
    'activeStep',
    'stepAmount',
    'completedSteps',
    'stepperWidth',
    'orientation',
    'useResizeObserver',
    'useDecimalSubSteps',
    'wppChange'
]);
export const WppStickyBar = defineContainer('wpp-sticky-bar-v4-1-0', defineWppStickyBar, [
    'variant',
    'barTitle',
    'offsetFromTop',
    'zIndex',
    'withBackButton',
    'scrollTreshold',
    'buttons',
    'tabs',
    'tabSize',
    'wppClickBackIcon',
    'wppClickBtn',
    'wppClickTab'
]);
export const WppTab = defineContainer('wpp-tab-v4-1-0', defineWppTab, [
    'active',
    'disabled',
    'value',
    'counter',
    'size',
    'icon',
    'ariaProps',
    'wppChangeTabControlItem',
    'wppFocus',
    'wppBlur'
]);
export const WppTabs = defineContainer('wpp-tabs-v4-1-0', defineWppTabs, [
    'value',
    'size',
    'ariaProps',
    'locales',
    'wppChange'
]);
export const WppTag = defineContainer('wpp-tag-v4-1-0', defineWppTag, [
    'variant',
    'maxLabelLength',
    'tooltipConfig',
    'label',
    'disabled'
]);
export const WppTextareaInput = defineContainer('wpp-textarea-input-v4-1-0', defineWppTextareaInput, [
    'name',
    'value',
    'placeholder',
    'required',
    'disabled',
    'autoFocus',
    'rows',
    'maxHeight',
    'size',
    'labelConfig',
    'labelTooltipConfig',
    'message',
    'messageType',
    'maxMessageLength',
    'charactersLimit',
    'warningThreshold',
    'ariaProps',
    'locales',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppTimePicker = defineContainer('wpp-time-picker-v4-1-0', defineWppTimePicker, [
    'size',
    'disabled',
    'dropdownConfig',
    'placeholder',
    'width',
    'value',
    'minutesInterval',
    'labelConfig',
    'name',
    'required',
    'labelTooltipConfig',
    'messageType',
    'message',
    'maxMessageLength',
    'tooltipConfig',
    'wppFocus',
    'wppBlur',
    'wppChange',
    'wppClear'
]);
export const WppToast = defineContainer('wpp-toast-v4-1-0', defineWppToast, [
    'variant',
    'index',
    'message',
    'header',
    'type',
    'duration',
    'primaryBtn',
    'maxMessageLines',
    'icon',
    'ariaProps',
    'zIndex',
    'wppToastComplete'
]);
export const WppToastContainer = defineContainer('wpp-toast-container-v4-1-0', defineWppToastContainer, [
    'maxToastsToDisplay',
    'zIndex',
    'staggerInterval'
]);
export const WppToggle = defineContainer('wpp-toggle-v4-1-0', defineWppToggle, [
    'name',
    'value',
    'checked',
    'required',
    'disabled',
    'autoFocus',
    'size',
    'controlled',
    'ariaProps',
    'labelConfig',
    'labelTooltipConfig',
    'wppChange',
    'wppFocus',
    'wppBlur'
]);
export const WppTooltip = defineContainer('wpp-tooltip-v4-1-0', defineWppTooltip, [
    'disabled',
    'header',
    'text',
    'value',
    'error',
    'warning',
    'wordBreak',
    'theme',
    'config',
    'externalClass',
    'dropdownWidth',
    'ariaProps',
    'anchorTabIndex'
]);
export const WppTopbar = defineContainer('wpp-topbar-v4-1-0', defineWppTopbar, [
    'navigation',
    'value',
    'nativeLink',
    'zIndex',
    'wppChange'
]);
export const WppTopbarItem = defineContainer('wpp-topbar-item-v4-1-0', defineWppTopbarItem, [
    'navigation',
    'firstLevel',
    'menu',
    'active',
    'activeItems',
    'nativeLink',
    'zIndex',
    'wppActiveTopbarItemChange',
    'wppTopbarItemMenuToggle'
]);
export const WppTree = defineContainer('wpp-tree-v4-1-0', defineWppTree, [
    'data',
    'search',
    'multiple',
    'defaultSelectedIds',
    'locales',
    'searchConfig',
    'disableSearchHighlight',
    'disableOpenCloseAnimation',
    'withItemsTruncation',
    'loading',
    'label',
    'skeletonNumberItems',
    'lazyConfig',
    'wppChange',
    'wppActionClick'
]);
export const WppTreeItem = defineContainer('wpp-tree-item-v4-1-0', defineWppTreeItem, [
    'text',
    'multiple',
    'search',
    'item',
    'level',
    'setSize',
    'posInSet',
    'isFocused',
    'highlightOptions',
    'transformSearchQuery',
    'disableSearchHighlight',
    'disableOpenCloseAnimation',
    'withItemsTruncation',
    'endContent',
    'wppTreeItemOpenChange',
    'wppTreeItemSelectChange'
]);
export const WppTypography = defineContainer('wpp-typography-v4-1-0', defineWppTypography, [
    'type',
    'tag',
    'color'
]);
export const WppVideoPlayer = defineContainer('wpp-video-player-v4-1-0', defineWppVideoPlayer, [
    'src',
    'thumbnail',
    'caption',
    'type',
    'size',
    'controlPanelConfig',
    'preload',
    'locales',
    'jumpValues',
    'ariaProps'
]);
//# sourceMappingURL=components.js.map