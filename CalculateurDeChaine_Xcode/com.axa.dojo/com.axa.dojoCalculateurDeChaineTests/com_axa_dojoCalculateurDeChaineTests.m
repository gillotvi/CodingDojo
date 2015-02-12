//
//  com_axa_dojoCalculateurDeChaineTests.m
//  com.axa.dojoCalculateurDeChaineTests
//
//  Created by Simon & Vincent on 25/06/2014.
//  Copyright (c) 2014 Simon & Vincent. All rights reserved.
//

#import <XCTest/XCTest.h>
#import "ViewController.h"

@interface com_axa_dojoCalculateurDeChaineTests : XCTestCase

@property (strong, nonatomic) ViewController *vc;

@end

@implementation com_axa_dojoCalculateurDeChaineTests

- (void)setUp
{
    [super setUp];
    self.vc = [ViewController new];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown
{
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void) testAddWithEmptyString
{
    int result = [self.vc add:@""];
    XCTAssertTrue(result == 0, @"Le résultat n'est pas égal à 0");
}

- (void) testAddWithSingleNumber
{
    int result =  [self.vc add:@"1"];
    XCTAssertTrue(result == 1, @"Le resultat n'est pas égal à 1");
}


- (void) testAddWithTwoNumbers
{
    int result =  [self.vc add:@"1,2"];
    XCTAssertTrue(result == 3, @"Le resultat n'est pas égal à 3");
}

- (void) testAddWithAnyNumbers
{
    int result = [self.vc add:@"1,2,7"];
    XCTAssertTrue(result == 10, @"Le résultat n'est pas égal à 10");
}


- (void) testAddWithAnyNumbersAndChariotReturn
{
    int result = [self.vc add:@"1\n2,3"];
    XCTAssertTrue(result == 6, @"Le résultat n'est pas égal à 6");
}

- (void) testAddWithAnyNumberAndDelimiteur
{
    int result = [self.vc add:@"//;\n1;3"];
    XCTAssertTrue(result == 4, @"Le résultat n'est pas égal à 4");
}

@end
