import { by, element, device, waitFor } from 'detox';
import testIDs from './testIds';

// import { openApp } from "../utils/openApp.native";

describe('Book Ticket', () => {
  beforeAll(async () => {
    await device.launchApp({
      // newInstance: true, // Ensures a clean start
      permissions: { notifications: 'YES' },
    });
  });

  // Test case 1
  it('Open first app', async () => {
    // Click tab favorite
    await element(by.id(testIDs.TAB_VIEW_FAVORITE)).atIndex(0).tap();
    // Check content empty list movie booked
    await expect(element(by.text('No movies favorite'))).toBeVisible();
    // Click tab favorite
    await element(by.id(testIDs.TAB_VIEW_BOOKED)).atIndex(0).tap();
    // Check content empty list movie booked
    await expect(element(by.text('No movies booked'))).toBeVisible();
    // Click tab movie
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
    //click Bottom tab home
    await element(by.id(testIDs.BOTTOM_TAB_BOOK_TICKET)).atIndex(0).tap();
    // check empty ticket when click bottom tab book ticket
    await expect(element(by.text('Please choose to book tickets in the home tab'))).toBeVisible();
    //click Bottom tab home
    await element(by.id(testIDs.BOTTOM_TAB_HOME)).atIndex(0).tap();
  });
  // test case 2
  it('Handle flow book ticket', async () => {
    await waitFor(element(by.id(testIDs.LIST_MOVIE)))
      .toBeVisible()
      .withTimeout(2000);
    // check list booked empty
    await element(by.id(testIDs.TAB_VIEW_BOOKED)).atIndex(0).tap();
    // Check content empty list movie booked
    await expect(element(by.text('No movies booked'))).toBeVisible();
    // Click tab movie
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
    // check item 2 exist
    await expect(element(by.id(testIDs.BTN_BOOK_TICKET_TAB_MOVIE + '2'))).toBeVisible();
    // Handle click book ticket item 2
    await element(by.id(testIDs.BTN_BOOK_TICKET_TAB_MOVIE + '2')).atIndex(0).tap();
    //check current screen is Book ticket
    await waitFor(element(by.text('Description')))
      .toBeVisible()
      .withTimeout(2000);  // Optional timeout if the button appears later

    // Check button Book ticket available
    await expect(element(by.id(testIDs.BTN_BOOK_TICKET))).toBeVisible();
    // Handle click button book ticket
    await element(by.id(testIDs.BTN_BOOK_TICKET)).tap();
    //check list booked available
    await waitFor(element(by.id(testIDs.LIST_BOOKED)))
      .toBeVisible()
      .withTimeout(2000);
    // Check Status button Book ticket
    await expect(element(by.text('Booked'))).toBeVisible();
    // Click tab live movie
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
  });
  // Test case 3
  it('Book ticket and check Tab Book ticket after book ticket success', async () => {
    await waitFor(element(by.id(testIDs.LIST_MOVIE)))
      .toBeVisible()
      .withTimeout(2000);
    // check list booked empty
    await element(by.id(testIDs.TAB_VIEW_BOOKED)).atIndex(0).tap();
    // Click tab movie
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
    // check item 2 exist
    await expect(element(by.id(testIDs.BTN_BOOK_TICKET_TAB_MOVIE + '1'))).toBeVisible();
    // Handle click book ticket item 2
    await element(by.id(testIDs.BTN_BOOK_TICKET_TAB_MOVIE + '1')).atIndex(0).tap();
    //check current screen is Book ticket
    await waitFor(element(by.text('Description')))
      .toBeVisible()
      .withTimeout(2000);  // Optional timeout if the button appears later

    // Check button Book ticket available
    await expect(element(by.id(testIDs.BTN_BOOK_TICKET))).toBeVisible();
    // Handle click button book ticket
    await element(by.id(testIDs.BTN_BOOK_TICKET)).tap();
    //check list booked available
    await waitFor(element(by.id(testIDs.LIST_BOOKED)))
      .toBeVisible()
      .withTimeout(2000);
    // Check Status button Book ticket
    await expect(element(by.text('Booked')).atIndex(1)).toBeVisible();
    // Click Bottom tab Book ticket
    await element(by.id(testIDs.BOTTOM_TAB_BOOK_TICKET)).atIndex(0).tap();
    // check empty ticket when click bottom tab book ticket
    await expect(element(by.text('Please choose to book tickets in the home tab'))).toBeVisible();
    await element(by.id(testIDs.BOTTOM_TAB_HOME)).atIndex(0).tap();
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
  });

  // Test case 4
  it('Check Favorite item', async () => {
    // Check if the first item exists, meaning there is data in the FlatList
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
    await waitFor(element(by.id(testIDs.LIST_MOVIE)))
      .toBeVisible()
      .withTimeout(2000);
    // Check if at least one item is rendered in the FlatList
    await expect(element(by.id(testIDs.BTN_LIKE_TAB_MOVIE + '1'))).toBeVisible();

    // Check click favorite button
    await element(by.id(testIDs.BTN_LIKE_TAB_MOVIE + '1')).atIndex(0).tap();

    await element(by.id(testIDs.TAB_VIEW_FAVORITE)).atIndex(0).tap();

    await expect(element(by.text('Liked')).atIndex(0)).toBeVisible();

  });

  // Test case 5
  it('Like multiple items and check the favorite tab to see if the item you just liked exists and unlike it', async () => {
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
    // like item movie by id  3,4, 5
    await element(by.id(testIDs.BTN_LIKE_TAB_MOVIE + '2')).atIndex(0).tap();
    await element(by.id(testIDs.BTN_LIKE_TAB_MOVIE + '3')).atIndex(0).tap();
    await element(by.id(testIDs.BTN_LIKE_TAB_MOVIE + '4')).atIndex(0).tap();

    //  click tab list favorite
    await element(by.id(testIDs.TAB_VIEW_FAVORITE)).atIndex(0).tap();

    // Check if the FlatList is visible after switching to the second tab
    await waitFor(element(by.id(testIDs.LIST_FAVORITE)))
      .toBeVisible()
      .withTimeout(5000);

    // click unlike item favorite
    await element(by.id(testIDs.BTN_LIKE_TAB_FAVORITE + '4')).atIndex(0).tap();
    await element(by.id(testIDs.BTN_LIKE_TAB_FAVORITE + '2')).atIndex(0).tap();
    await element(by.id(testIDs.BTN_LIKE_TAB_FAVORITE + '1')).atIndex(0).tap();
    await element(by.id(testIDs.BTN_LIKE_TAB_FAVORITE + '3')).atIndex(0).tap();
    //check list empty
    await expect(element(by.text('No movies favorite'))).toBeVisible();
    // go back tab movie
    await element(by.id(testIDs.TAB_VIEW_MOVIE)).atIndex(0).tap();
  });
});
