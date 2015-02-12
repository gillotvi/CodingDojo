//
//  ViewController.h
//  com.axa.dojoCalculateurDeChaine
//
//  Created by Simon & Vincent on 25/06/2014.
//  Copyright (c) 2014 Simon & Vincent. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController

@property (weak, nonatomic) IBOutlet UILabel *lblViewController;

- (int) add:(NSString *)numbers;

@end
