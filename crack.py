import cv2
import tensorflow as tf
import pathlib

def dent():
  model='D:\crack_detective'
  session=tf.compat.v1.Session(graph=tf.Graph())
  tf.compat.v1.saved_model.loader.load(session,['serve'],model)
  image='D:\crack_detective\images'

  def draw_boxes(height, width, box, img,score):
    ymin = int(max(1, (box[0] * height)))
    xmin = int(max(1, (box[1] * width)))
    ymax = int(min(height, (box[2] * height)))
    xmax = int(min(width, (box[3] * width)))
    color = (0, 255, 0)  # Green for cracks
    if score < 0.50:
        color = (0, 0, 255) 
    cv2.rectangle(img, (xmin, ymin), (xmax, ymax), color, 10)
    cv2.putText(img, f"Probability: {score:.2f}", (xmin, ymin - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)

  for file in pathlib.Path(image).iterdir():
    curr=r"{}".format(file.resolve())
    bytes=open(curr,'rb').read()
    result=session.run(['detection_boxes:0','detection_scores:0'],feed_dict={'encoded_image_string_tensor:0':[bytes]})
    boxes = result[0][0]
    scores = result[1][0]
    print("File {} has result {}".format(*file.stem))
    img = cv2.imread(curr)
    imH, imW, _ = img.shape
    
    for i in range(len(scores)):
        if scores[i] > 0.45:
            print("The box {} has probability {}".format(boxes[i], scores[i]))
            draw_boxes(imH, imW, boxes[i], img, scores[i])

    
    new_img = cv2.resize(img, (1080, 1920))
    cv2.imshow("image", new_img)
    cv2.waitKey(0)
    return new_img